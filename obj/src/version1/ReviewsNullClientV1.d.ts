import { IReviewsClientV1 } from './IReviewsClientV1';
import { FilterParams } from 'pip-services3-commons-node';
import { SortParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ReviewV1 } from 'pip-services-reviews-node';
import { RatingV1 } from 'pip-services-reviews-node';
export declare class ReviewsNullClientV1 implements IReviewsClientV1 {
    getReviews(correlationId: string, filter: FilterParams, paging: PagingParams, sorting: SortParams, callback: (err: any, page: DataPage<ReviewV1>) => void): void;
    getReviewById(correlationId: string, reviewId: string, callback: (err: any, review: ReviewV1) => void): void;
    getPartyReview(correlationId: string, partyId: string, productId: string, callback: (err: any, review: ReviewV1) => void): void;
    getProductRating(correlationId: string, productId: string, callback: (err: any, rating: RatingV1) => void): void;
    submitReview(correlationId: string, review: ReviewV1, callback: (err: any, rating: RatingV1) => void): void;
    reportHelpful(correlationId: string, reviewId: string, partyId: string, callback: (err: any, review: ReviewV1) => void): void;
    reportAbuse(correlationId: string, reviewId: string, partyId: string, callback: (err: any, review: ReviewV1) => void): void;
    deleteReviewById(correlationId: string, reviewId: string, callback: (err: any, rating: RatingV1) => void): void;
}
