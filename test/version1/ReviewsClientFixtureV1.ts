let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { IReviewsClientV1 } from '../../src/version1/IReviewsClientV1';
import { TestModel } from '../data/TestModel';
import { PagingParams } from 'pip-services3-commons-node';
import { ReviewV1 } from 'pip-services-reviews-node';

let REVIEW1: ReviewV1 = TestModel.createReview1();
let REVIEW2: ReviewV1 = TestModel.createReview2();

export class ReviewsClientFixtureV1 {
    private _client: IReviewsClientV1;

    constructor(client: IReviewsClientV1) {
        this._client = client;
    }

    testCrudOperations(done) {
        let review1:ReviewV1;

        async.series([
            // Create one Review
            (callback) => {
                this._client.submitReview(
                    null,
                    REVIEW1,
                    (err, rating) => {
                        assert.isNull(err);

                        assert.isObject(rating);

                        callback();
                    }
                );
            },
            // Create another Review
            (callback) => {
                this._client.submitReview(
                    null,
                    REVIEW2,
                    (err, rating) => {
                        assert.isNull(err);

                        assert.isObject(rating);

                        callback();
                    }
                );
            },
            // Get all Reviews
            (callback) => {
                this._client.getReviews(
                    null,
                    null,
                    null,
                    null,
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 2);
                        review1 = _.clone(page.data[0]);

                        callback();
                    }
                );
            },
            // Get Review by id
            (callback) => {
                this._client.getReviewById(
                    null,
                    REVIEW1.id,
                    (err, review) => {
                        assert.isNull(err);

                        assert.isObject(review);
                        TestModel.assertEqualReviewV1(review, REVIEW1);

                        callback();
                    }
                );
            },
            // Get party Review
            (callback) => {
                this._client.getPartyReview(
                    null,
                    REVIEW1.party_id,
                    REVIEW1.product_id,
                    (err, review) => {
                        assert.isNull(err);

                        assert.isObject(review);
                        TestModel.assertEqualReviewV1(review, REVIEW1);

                        callback();
                    }
                );
            },
            // Get product rating
            (callback) => {
                this._client.getProductRating(
                    null,
                    REVIEW1.product_id,
                    (err, rating) => {
                        assert.isNull(err);

                        assert.isObject(rating);
                        assert.equal(rating.rating_0_count, 1);
                        assert.isUndefined(rating.rating_1_count);
                        assert.isUndefined(rating.rating_2_count);
                        assert.equal(rating.rating_3_count, 1);
                        assert.isUndefined(rating.rating_4_count);
                        assert.isUndefined(rating.rating_5_count);
                        assert.equal(rating.total_count, 2);

                        callback();
                    }
                );
            },
            // Update review
            (callback) => {
                review1.rating = 5;
                review1.testimonial = "Update Test msg";
                this._client.updateReview(
                    null,
                    review1,
                    (err, rating) => {
                        assert.isNull(err);

                        assert.isObject(rating);
                        assert.equal(rating.rating_0_count, 0);
                        assert.isUndefined(rating.rating_1_count);
                        assert.isUndefined(rating.rating_2_count);
                        assert.equal(rating.rating_3_count, 1);
                        assert.isUndefined(rating.rating_4_count);
                        assert.equal(rating.rating_5_count, 1);
                        assert.equal(rating.total_count, 2);

                        callback();
                    }
                );
            },
            // Get Review by id
            (callback) => {
                this._client.getReviewById(
                    null,
                    review1.id,
                    (err, review) => {
                        assert.isNull(err);

                        assert.isObject(review);
                        TestModel.assertEqualReviewV1(review, review1);

                        callback();
                    }
                );
            },
            // Report Review helpful
            (callback) => {
                this._client.reportHelpful(
                    null,
                    REVIEW1.id,
                    REVIEW1.party_id,
                    (err, review) => {
                        assert.isNull(err);

                        assert.isObject(review);
                        assert.equal(review.helpful_count, 1);

                        callback();
                    }
                );
            },
            // Report Review abuse
            (callback) => {
                this._client.reportAbuse(
                    null,
                    REVIEW2.id,
                    REVIEW2.party_id,

                    (err, review) => {
                        assert.isNull(err);

                        assert.isObject(review);
                        assert.equal(review.abuse_count, 1);

                        callback();
                    }
                );
            },
            // Delete Review
            (callback) => {
                this._client.deleteReviewById(
                    null,
                    REVIEW1.id,

                    (err) => {
                        assert.isNull(err);

                        //assert.isNull(result);

                        callback();
                    }
                );
            },
            // Try to get delete Review
            (callback) => {
                this._client.getReviewById(
                    null,
                    REVIEW1.id,
                    (err) => {
                        assert.isNull(err);

                        //assert.isNull(result);

                        callback();
                    }
                );
            }
        ], done);
    }
}
