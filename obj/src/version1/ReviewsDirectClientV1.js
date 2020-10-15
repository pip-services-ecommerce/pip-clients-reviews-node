"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsDirectClientV1 = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ReviewsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_2.Descriptor('pip-services-reviews', 'controller', '*', '*', '*'));
        if (config)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getReviews(correlationId, filter, paging, sorting, callback) {
        let timing = this.instrument(correlationId, 'reviews.get_reviews');
        this._controller.getReviews(correlationId, filter, paging, sorting, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getReviewById(correlationId, reviewId, callback) {
        let timing = this.instrument(correlationId, 'reviews.get_review_by_id');
        this._controller.getReviewById(correlationId, reviewId, (err, review) => {
            timing.endTiming();
            callback(err, review);
        });
    }
    getPartyReview(correlationId, partyId, productId, callback) {
        let timing = this.instrument(correlationId, 'reviews.get_party_review');
        this._controller.getPartyReview(correlationId, partyId, productId, (err, review) => {
            timing.endTiming();
            callback(err, review);
        });
    }
    getProductRating(correlationId, productId, callback) {
        let timing = this.instrument(correlationId, 'reviews.get_product_rating');
        this._controller.getProductRating(correlationId, productId, (err, rating) => {
            timing.endTiming();
            callback(err, rating);
        });
    }
    submitReview(correlationId, review, callback) {
        let timing = this.instrument(correlationId, 'reviews.submit_review');
        this._controller.submitReview(correlationId, review, (err, rating) => {
            timing.endTiming();
            callback(err, rating);
        });
    }
    updateReview(correlationId, review, callback) {
        let timing = this.instrument(correlationId, 'reviews.update_review');
        this._controller.updateReview(correlationId, review, (err, rating) => {
            timing.endTiming();
            callback(err, rating);
        });
    }
    reportHelpful(correlationId, reviewId, partyId, callback) {
        let timing = this.instrument(correlationId, 'reviews.report_helpful');
        this._controller.reportHelpful(correlationId, reviewId, partyId, (err, review) => {
            timing.endTiming();
            callback(err, review);
        });
    }
    reportAbuse(correlationId, reviewId, partyId, callback) {
        let timing = this.instrument(correlationId, 'reviews.report_abuse');
        this._controller.reportAbuse(correlationId, reviewId, partyId, (err, review) => {
            timing.endTiming();
            callback(err, review);
        });
    }
    deleteReviewById(correlationId, reviewId, callback) {
        let timing = this.instrument(correlationId, 'reviews.delete_review_by_id');
        this._controller.deleteReviewById(correlationId, reviewId, (err, rating) => {
            timing.endTiming();
            callback(err, rating);
        });
    }
}
exports.ReviewsDirectClientV1 = ReviewsDirectClientV1;
//# sourceMappingURL=ReviewsDirectClientV1.js.map