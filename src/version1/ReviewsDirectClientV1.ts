import { ConfigParams, SortParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IReviewsClientV1 } from './IReviewsClientV1';
import { ReviewV1 } from 'pip-services-reviews-node';
import { RatingV1 } from 'pip-services-reviews-node';

export class ReviewsDirectClientV1 extends DirectClient<any> implements IReviewsClientV1 {

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor('pip-services-reviews', 'controller', '*', '*', '*'));

        if (config)
            this.configure(ConfigParams.fromValue(config));
    }

    getReviews(correlationId: string, filter: FilterParams, paging: PagingParams, sorting: SortParams, 
        callback: (err: any, page: DataPage<ReviewV1>) => void): void {
            let timing = this.instrument(correlationId, 'reviews.get_reviews');
            this._controller.getReviews(correlationId, filter, paging, sorting, (err, page) => {
                timing.endTiming();
                callback(err, page);
            });
    }

    getReviewById(correlationId: string, reviewId: string, 
        callback: (err: any, review: ReviewV1) => void): void {
            let timing = this.instrument(correlationId, 'reviews.get_review_by_id');
            this._controller.getReviewById(correlationId, reviewId, (err, review) => {
                timing.endTiming();
                callback(err, review);
            });
    }

    getPartyReview(correlationId: string, partyId: string, productId: string, 
        callback: (err: any, review: ReviewV1) => void): void {
        let timing = this.instrument(correlationId, 'reviews.get_party_review');
        this._controller.getPartyReview(correlationId, partyId, productId, (err, review) => {
            timing.endTiming();
            callback(err, review);
        });
    }

    getProductRating(correlationId: string, productId: string, 
        callback: (err: any, rating: RatingV1) => void): void {
        let timing = this.instrument(correlationId, 'reviews.get_product_rating');
        this._controller.getProductRating(correlationId, productId, (err, rating) => {
            timing.endTiming();
            callback(err, rating);
        });
    }

    submitReview(correlationId: string, review: ReviewV1, 
        callback: (err: any, rating: RatingV1) => void): void {
        let timing = this.instrument(correlationId, 'reviews.submit_review');
        this._controller.submitReview(correlationId, review, (err, rating) => {
            timing.endTiming();
            callback(err, rating);
        });
    }

    reportHelpful(correlationId: string, reviewId: string, partyId: string, 
        callback: (err: any, review: ReviewV1) => void): void {
        let timing = this.instrument(correlationId, 'reviews.report_helpful');
        this._controller.reportHelpful(correlationId, reviewId, partyId, (err, review) => {
            timing.endTiming();
            callback(err, review);
        });
    }

    reportAbuse(correlationId: string, reviewId: string, partyId: string, 
        callback: (err: any, review: ReviewV1) => void): void {
        let timing = this.instrument(correlationId, 'reviews.report_abuse');
        this._controller.reportAbuse(correlationId, reviewId, partyId, (err, review) => {
            timing.endTiming();
            callback(err, review);
        });
    }

    deleteReviewById(correlationId: string, reviewId: string, 
        callback: (err: any, rating: RatingV1) => void): void {
        let timing = this.instrument(correlationId, 'reviews.delete_review_by_id');
        this._controller.deleteReviewById(correlationId, reviewId, (err, rating) => {
            timing.endTiming();
            callback(err, rating);
        });
    }
}