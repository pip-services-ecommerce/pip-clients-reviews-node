import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { RatingsMemoryPersistence } from 'pip-services-reviews-node';
import { ReviewsMemoryPersistence } from 'pip-services-reviews-node';
import { ReviewsController } from 'pip-services-reviews-node';
import { ReviewsDirectClientV1 } from '../../src/version1/ReviewsDirectClientV1';
import { ReviewsClientFixtureV1 } from './ReviewsClientFixtureV1';

suite('ReviewsDirectClientV1', () => {
    let client: ReviewsDirectClientV1;
    let fixture: ReviewsClientFixtureV1;

    suiteSetup((done) => {
        
        let logger = new ConsoleLogger();
        let reviewsPersistence = new ReviewsMemoryPersistence();
        let ratingsPersistence = new RatingsMemoryPersistence();

        let controller = new ReviewsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-reviews', 'persistence', 'memory', 'reviews', '1.0'), reviewsPersistence,
            new Descriptor('pip-services-reviews', 'persistence', 'memory', 'ratings', '1.0'), ratingsPersistence,
            new Descriptor('pip-services-reviews', 'controller', 'default', 'default', '1.0'), controller,
        );

        reviewsPersistence.setReferences(references);
        ratingsPersistence.setReferences(references);
        controller.setReferences(references);

        client = new ReviewsDirectClientV1();
        client.setReferences(references);

        fixture = new ReviewsClientFixtureV1(client);

        client.open(null, done);
    });

    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
