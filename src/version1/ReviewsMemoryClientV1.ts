let _ = require('lodash');

import { IReviewsClientV1 } from './IReviewsClientV1';

import { IdGenerator, SortParams, ConfigParams, References, Descriptor } from "pip-services3-commons-node";
import { BadRequestException } from "pip-services3-commons-node";

import { FilterParams } from "pip-services3-commons-node";
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { ReviewV1, RatingV1 } from "pip-services-reviews-node";
import { ReviewsMemoryPersistence } from "pip-services-reviews-node";
import { RatingsMemoryPersistence } from "pip-services-reviews-node";
import { ReviewsController } from "pip-services-reviews-node";

export class ReviewsMemoryClientV1 implements IReviewsClientV1 {
    private _controller = new ReviewsController();

    public constructor(...reviews: ReviewV1[]) {

        let configParams = new ConfigParams();
        let reviewsPersistence = new ReviewsMemoryPersistence();
        let ratingsPersistence = new RatingsMemoryPersistence();

        reviewsPersistence.configure(configParams);
        ratingsPersistence.configure(configParams);

        this._controller.configure(configParams);

        let references = References.fromTuples(
            new Descriptor('pip-services-reviews', 'persistence', 'memory', 'reviews', '1.0'), reviewsPersistence,
            new Descriptor('pip-services-reviews', 'persistence', 'memory', 'ratings', '1.0'), ratingsPersistence,
            new Descriptor('pip-services-reviews', 'controller', 'default', 'default', '1.0'), this._controller
        );

        this._controller.setReferences(references);

        reviewsPersistence.open(null, (err) => {
            ratingsPersistence.open(null, (err) => {
                reviews.forEach(review => this._controller.submitReview(null, review, (err, rating) => {
                    if (err) {
                        throw err;
                    }
                }));
            })
        });
    }

    getReviews(correlationId: string, filter: FilterParams, paging: PagingParams, sorting: SortParams,
        callback: (err: any, page: DataPage<ReviewV1>) => void): void {
        this._controller.getReviews(correlationId, filter, paging, sorting, callback);
    }

    getReviewById(correlationId: string, reviewId: string,
        callback: (err: any, review: ReviewV1) => void): void {
        this._controller.getReviewById(correlationId, reviewId, callback);
    }

    getPartyReview(correlationId: string, partyId: string, productId: string,
        callback: (err: any, review: ReviewV1) => void): void {
        this._controller.getPartyReview(correlationId, partyId, productId, callback);
    }

    getProductRating(correlationId: string, productId: string,
        callback: (err: any, rating: RatingV1) => void): void {
        this._controller.getProductRating(correlationId, productId, callback);
    }

    submitReview(correlationId: string, review: ReviewV1,
        callback: (err: any, rating: RatingV1) => void): void {
        this._controller.submitReview(correlationId, review, callback);
    }

    reportHelpful(correlationId: string, reviewId: string, partyId: string,
        callback: (err: any, review: ReviewV1) => void): void {
        this._controller.reportHelpful(correlationId, reviewId, partyId, callback);
    }

    reportAbuse(correlationId: string, reviewId: string, partyId: string,
        callback: (err: any, review: ReviewV1) => void): void {
        this._controller.reportAbuse(correlationId, reviewId, partyId, callback);
    }

    deleteReviewById(correlationId: string, reviewId: string,
        callback: (err: any, rating: RatingV1) => void): void {
        this._controller.deleteReviewById(correlationId, reviewId, callback);
    }
}