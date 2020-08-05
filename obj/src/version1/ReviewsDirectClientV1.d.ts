import { SortParams } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { IReviewsClientV1 } from './IReviewsClientV1';
import { ReviewV1 } from 'pip-services-reviews-node';
import { RatingV1 } from 'pip-services-reviews-node';
export declare class ReviewsDirectClientV1 extends DirectClient<any> implements IReviewsClientV1 {
    constructor(config?: any);
    getReviews(correlationId: string, filter: FilterParams, paging: PagingParams, sorting: SortParams, callback: (err: any, page: DataPage<ReviewV1>) => void): void;
    getReviewById(correlationId: string, reviewId: string, callback: (err: any, review: ReviewV1) => void): void;
    getPartyReview(correlationId: string, partyId: string, productId: string, callback: (err: any, review: ReviewV1) => void): void;
    getProductRating(correlationId: string, productId: string, callback: (err: any, rating: RatingV1) => void): void;
    submitReview(correlationId: string, review: ReviewV1, callback: (err: any, rating: RatingV1) => void): void;
    reportHelpful(correlationId: string, reviewId: string, partyId: string, callback: (err: any, review: ReviewV1) => void): void;
    reportAbuse(correlationId: string, reviewId: string, partyId: string, callback: (err: any, review: ReviewV1) => void): void;
    deleteReviewById(correlationId: string, reviewId: string, callback: (err: any, rating: RatingV1) => void): void;
}
