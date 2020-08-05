let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ReviewsMemoryPersistence, RatingsMemoryPersistence } from 'pip-services-reviews-node';
import { ReviewsController } from 'pip-services-reviews-node';
import { ReviewsHttpServiceV1 } from 'pip-services-reviews-node';
import { IReviewsClientV1 } from '../../src/version1/IReviewsClientV1';
import { ReviewsHttpClientV1 } from '../../src/version1/ReviewsHttpClientV1';
import { ReviewsClientFixtureV1 } from './ReviewsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ReviewsHttpClientV1', () => {
    let service: ReviewsHttpServiceV1;
    let client: ReviewsHttpClientV1;
    let fixture: ReviewsClientFixtureV1;

    suiteSetup((done) => {

        let logger = new ConsoleLogger();
        let reviewsPersistence = new ReviewsMemoryPersistence();
        let ratingsPersistence = new RatingsMemoryPersistence();
        let controller = new ReviewsController();

        service = new ReviewsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-reviews', 'persistence', 'memory', 'reviews', '1.0'), reviewsPersistence,
            new Descriptor('pip-services-reviews', 'persistence', 'memory', 'ratings', '1.0'), ratingsPersistence,
            new Descriptor('pip-services-reviews', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-reviews', 'service', 'http', 'default', '1.0'), service
        );

        reviewsPersistence.setReferences(references);
        ratingsPersistence.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new ReviewsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ReviewsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
