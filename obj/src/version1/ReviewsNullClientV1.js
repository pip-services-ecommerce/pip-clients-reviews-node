"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsNullClientV1 = void 0;
class ReviewsNullClientV1 {
    getReviews(correlationId, filter, paging, sorting, callback) {
        callback(null, null);
    }
    getReviewById(correlationId, reviewId, callback) {
        callback(null, null);
    }
    getPartyReview(correlationId, partyId, productId, callback) {
        callback(null, null);
    }
    getProductRating(correlationId, productId, callback) {
        callback(null, null);
    }
    submitReview(correlationId, review, callback) {
        callback(null, null);
    }
    updateReview(correlationId, review, callback) {
        callback(null, null);
    }
    reportHelpful(correlationId, reviewId, partyId, callback) {
        callback(null, null);
    }
    reportAbuse(correlationId, reviewId, partyId, callback) {
        callback(null, null);
    }
    deleteReviewById(correlationId, reviewId, callback) {
        callback(null, null);
    }
}
exports.ReviewsNullClientV1 = ReviewsNullClientV1;
//# sourceMappingURL=ReviewsNullClientV1.js.map