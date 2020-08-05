"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ReviewsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/reviews');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getReviews(correlationId, filter, paging, sorting, callback) {
        this.callCommand('get_reviews', correlationId, {
            filter: filter,
            paging: paging,
            sorting: sorting
        }, callback);
    }
    getReviewById(correlationId, reviewId, callback) {
        this.callCommand('get_review_by_id', correlationId, {
            review_id: reviewId,
        }, callback);
    }
    getPartyReview(correlationId, partyId, productId, callback) {
        this.callCommand('get_party_review', correlationId, {
            party_id: partyId,
            product_id: productId
        }, callback);
    }
    getProductRating(correlationId, productId, callback) {
        this.callCommand('get_product_rating', correlationId, {
            product_id: productId,
        }, callback);
    }
    submitReview(correlationId, review, callback) {
        this.callCommand('submit_review', correlationId, {
            review: review,
        }, callback);
    }
    reportHelpful(correlationId, reviewId, partyId, callback) {
        this.callCommand('report_helpful', correlationId, {
            review_id: reviewId,
            party_id: partyId
        }, callback);
    }
    reportAbuse(correlationId, reviewId, partyId, callback) {
        this.callCommand('report_abuse', correlationId, {
            review_id: reviewId,
            party_id: partyId
        }, callback);
    }
    deleteReviewById(correlationId, reviewId, callback) {
        this.callCommand('delete_review_by_id', correlationId, {
            review_id: reviewId,
        }, callback);
    }
}
exports.ReviewsHttpClientV1 = ReviewsHttpClientV1;
//# sourceMappingURL=ReviewsHttpClientV1.js.map