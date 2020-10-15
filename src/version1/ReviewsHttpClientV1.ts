import { ConfigParams, SortParams } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { IReviewsClientV1 } from './IReviewsClientV1';
import { ReviewV1 } from 'pip-services-reviews-node';
import { RatingV1 } from 'pip-services-reviews-node';

export class ReviewsHttpClientV1 extends CommandableHttpClient implements IReviewsClientV1 {

    constructor(config?: any) {
        super('v1/reviews');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    getReviews(correlationId: string, filter: FilterParams, paging: PagingParams, sorting: SortParams,
        callback: (err: any, page: DataPage<ReviewV1>) => void): void {
        this.callCommand(
            'get_reviews',
            correlationId,
            {
                filter: filter,
                paging: paging,
                sorting: sorting
            },
            callback
        );
    }

    getReviewById(correlationId: string, reviewId: string, callback: (err: any, review: ReviewV1) => void): void {
        this.callCommand(
            'get_review_by_id',
            correlationId,
            {
                review_id: reviewId,
            },
            callback
        );
    }

    getPartyReview(correlationId: string, partyId: string, productId: string, callback: (err: any, review: ReviewV1) => void): void {
        this.callCommand(
            'get_party_review',
            correlationId,
            {
                party_id: partyId,
                product_id: productId
            },
            callback
        );
    }

    getProductRating(correlationId: string, productId: string, callback: (err: any, rating: RatingV1) => void): void {
        this.callCommand(
            'get_product_rating',
            correlationId,
            {
                product_id: productId,
            },
            callback
        );
    }

    submitReview(correlationId: string, review: ReviewV1, callback: (err: any, rating: RatingV1) => void): void {
        this.callCommand(
            'submit_review',
            correlationId,
            {
                review: review,
            },
            callback
        );
    }

    updateReview(correlationId: string, review: ReviewV1, callback: (err: any, rating: RatingV1) => void): void {
        this.callCommand(
            'update_review',
            correlationId,
            {
                review: review,
            },
            callback
        );
    }

    reportHelpful(correlationId: string, reviewId: string, partyId: string, callback: (err: any, review: ReviewV1) => void): void {
        this.callCommand(
            'report_helpful',
            correlationId,
            {
                review_id: reviewId,
                party_id: partyId
            },
            callback
        );
    }

    reportAbuse(correlationId: string, reviewId: string, partyId: string, callback: (err: any, review: ReviewV1) => void): void {
        this.callCommand(
            'report_abuse',
            correlationId,
            {
                review_id: reviewId,
                party_id: partyId
            },
            callback
        );
    }

    deleteReviewById(correlationId: string, reviewId: string, callback: (err: any, rating: RatingV1) => void): void {
        this.callCommand(
            'delete_review_by_id',
            correlationId,
            {
                review_id: reviewId,
            },
            callback
        );
    }
}
