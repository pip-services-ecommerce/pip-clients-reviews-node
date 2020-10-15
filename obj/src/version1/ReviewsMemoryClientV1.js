"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsMemoryClientV1 = void 0;
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services_reviews_node_1 = require("pip-services-reviews-node");
const pip_services_reviews_node_2 = require("pip-services-reviews-node");
const pip_services_reviews_node_3 = require("pip-services-reviews-node");
class ReviewsMemoryClientV1 {
    constructor(...reviews) {
        this._controller = new pip_services_reviews_node_3.ReviewsController();
        let configParams = new pip_services3_commons_node_1.ConfigParams();
        let reviewsPersistence = new pip_services_reviews_node_1.ReviewsMemoryPersistence();
        let ratingsPersistence = new pip_services_reviews_node_2.RatingsMemoryPersistence();
        reviewsPersistence.configure(configParams);
        ratingsPersistence.configure(configParams);
        this._controller.configure(configParams);
        let references = pip_services3_commons_node_1.References.fromTuples(new pip_services3_commons_node_1.Descriptor('pip-services-reviews', 'persistence', 'memory', 'reviews', '1.0'), reviewsPersistence, new pip_services3_commons_node_1.Descriptor('pip-services-reviews', 'persistence', 'memory', 'ratings', '1.0'), ratingsPersistence, new pip_services3_commons_node_1.Descriptor('pip-services-reviews', 'controller', 'default', 'default', '1.0'), this._controller);
        this._controller.setReferences(references);
        reviewsPersistence.open(null, (err) => {
            ratingsPersistence.open(null, (err) => {
                reviews.forEach(review => this._controller.submitReview(null, review, (err, rating) => {
                    if (err) {
                        throw err;
                    }
                }));
            });
        });
    }
    getReviews(correlationId, filter, paging, sorting, callback) {
        this._controller.getReviews(correlationId, filter, paging, sorting, callback);
    }
    getReviewById(correlationId, reviewId, callback) {
        this._controller.getReviewById(correlationId, reviewId, callback);
    }
    getPartyReview(correlationId, partyId, productId, callback) {
        this._controller.getPartyReview(correlationId, partyId, productId, callback);
    }
    getProductRating(correlationId, productId, callback) {
        this._controller.getProductRating(correlationId, productId, callback);
    }
    submitReview(correlationId, review, callback) {
        this._controller.submitReview(correlationId, review, callback);
    }
    updateReview(correlationId, review, callback) {
        this._controller.updateReview(correlationId, review, callback);
    }
    reportHelpful(correlationId, reviewId, partyId, callback) {
        this._controller.reportHelpful(correlationId, reviewId, partyId, callback);
    }
    reportAbuse(correlationId, reviewId, partyId, callback) {
        this._controller.reportAbuse(correlationId, reviewId, partyId, callback);
    }
    deleteReviewById(correlationId, reviewId, callback) {
        this._controller.deleteReviewById(correlationId, reviewId, callback);
    }
}
exports.ReviewsMemoryClientV1 = ReviewsMemoryClientV1;
//# sourceMappingURL=ReviewsMemoryClientV1.js.map