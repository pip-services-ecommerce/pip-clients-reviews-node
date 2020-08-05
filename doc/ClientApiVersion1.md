# Client API (version 1) <br/> Reviews Microservices Client SDK for Node.js

Node.js client API for Reviews microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [IReviewsClientV1 interface](#interface)
    - [getReviews()](#operation1)
    - [getReviewById()](#operation2)
    - [getPartyReview()](#operation3)
    - [getProductRating()](#operation4)
    - [submitReview()](#operation5)
    - [reportHelpful()](#operation6)
    - [reportAbuse()](#operation7)
    - [deleteReviewById()](#operation8)
* [ReviewsHttpClientV1 class](#client_http)
* [ReviewsDirectClientV1 class](#client_direct)
* [ReviewsNullClientV1 class](#client_null)

## <a name="interface"></a> IReviewsClientV1 interface

If you are using Typescript, you can use IReviewsClientV1 as a common interface across all client implementations. 
If you are using plain typescript, you shall not worry about IReviewsClientV1 interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```typescript
interface IReviewsClientV1 {
    getReviews(correlationId: string, filter: FilterParams, paging: PagingParams, sorting: SortParams,
        callback: (err: any, page: DataPage<ReviewV1>) => void): void;

    getReviewById(correlationId: string, reviewId: string,
        callback: (err: any, review: ReviewV1) => void): void;

    getPartyReview(correlationId: string, partyId: string, productId: string,
        callback: (err: any, review: ReviewV1) => void): void;

    getProductRating(correlationId: string, productId: string,
        callback: (err: any, rating: RatingV1) => void): void;
        
    submitReview(correlationId: string, review: ReviewV1, 
        callback: (err: any, rating: RatingV1) => void): void;

    reportHelpful(correlationId: string, reviewId: string, partyId: string,
        callback: (err: any, review: ReviewV1) => void): void;

    reportAbuse(correlationId: string, reviewId: string, partyId: string,
        callback: (err: any, review: ReviewV1) => void): void;
            
    deleteReviewById(correlationId: string, reviewId: string,
        callback: (err: any, rating: RatingV1) => void): void;
}
```

### <a name="operation1"></a> getReviews(correlationId, filter, paging, sorting, callback)

Get reviews by filter

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- filter: Object
    - id: string - (optional) unique review id
    - ids: string - (optional) list of unique review ids
    - product_id: string - (optional) review reference product id
    - party_id: string - (optional) review reference party id
    - full_review: boolean - (optional) 
- paging: Object
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result

**Response body:**
- err: Error - occured error or null for success
- page: DataPage<ReviewV1> - page with reviews

### <a name="operation2"></a> getReviewById(correlationId, reviewId, callback)

Get review by id

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- reviewId: string - review id

**Response body:**
- err: Error - occured error or null for success
- review: ReviewV1 - finded review 

### <a name="operation3"></a> getPartyReview(correlationId, partyId, productId, callback)

Get a party review for a product

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- productId: string - product id
- partyId: string - party id

**Response body:**
- err: Error - occured error or null for success
- review: ReviewV1 - finded review 

### <a name="operation4"></a> getProductRating(correlationId, productId, callback)

Get product rating by product id

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- productId: string - product id

**Response body:**
- err: Error - occured error or null for success
- rating: RatingV1 - product rating

### <a name="operation5"></a> submitReview(correlationId, review, callback)

Add new review

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- review: ReviewV1 - params for creates new review

**Response body:**
- err: Error - occured error or null for success
- rating: RatingV1 - product rating for which the review was sent

### <a name="operation6"></a> reportHelpful(correlationId, reviewId, partyId, callback)

Increment helpful counter for review

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- reviewId: string - review id 
- partyId: string - party id

**Returns:**
- err: Error - occured error or null for success
- review: ReviewV1 - updated review 

### <a name="operation7"></a> reportAbuse(correlationId, reviewId, partyId, callback)

Increment abuse counter for review

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- reviewId: string - review id 
- partyId: string - party id

**Returns:**
- err: Error - occured error or null for success
- review: ReviewV1 - updated review 

### <a name="operation8"></a> deleteReviewById(correlationId, reviewId, callback)

Delete review by id

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- reviewId: string - review id for delete

**Returns:**
- err: Error - occured error or null for success
- rating: RatingV1 - product rating


## <a name="client_http"></a> ReviewsHttpClientV1 class

ReviewsHttpClientV1 is a client that implements HTTP protocol

```typescript
class ReviewsHttpClientV1 extends CommandableHttpClient implements IReviewsClientV1 {
    constructor(config?: any);
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getReviews(correlationId: string, filter: FilterParams, paging: PagingParams, sorting: SortParams, callback: (err: any, page: DataPage<ReviewV1>) => void): void;
    getReviewById(correlationId: string, reviewId: string, callback: (err: any, review: ReviewV1) => void): void;
    getPartyReview(correlationId: string, partyId: string, productId: string, callback: (err: any, review: ReviewV1) => void): void;
    getProductRating(correlationId: string, productId: string, callback: (err: any, rating: RatingV1) => void): void;
    submitReview(correlationId: string, review: ReviewV1, callback: (err: any, rating: RatingV1) => void): void;
    reportHelpful(correlationId: string, reviewId: string, partyId: string, callback: (err: any, review: ReviewV1) => void): void;
    reportAbuse(correlationId: string, reviewId: string, partyId: string, callback: (err: any, review: ReviewV1) => void): void;
    deleteReviewById(correlationId: string, reviewId: string, callback: (err: any, rating: RatingV1) => void): void;
}
```

**Constructor config properties:** 
- connection: object - HTTP transport configuration options
  - protocol: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_direct"></a> ReviewsDirectClientV1 class

ReviewsDirectClientV1 is a dummy client calls controller from the same container. 
It can be used in monolytic deployments.

```typescript
class ReviewsDirectClientV1 extends DirectClient<any> implements IReviewsClientV1 {
    constructor();
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getReviews(correlationId: string, filter: FilterParams, paging: PagingParams, sorting: SortParams, callback: (err: any, page: DataPage<ReviewV1>) => void): void;
    getReviewById(correlationId: string, reviewId: string, callback: (err: any, review: ReviewV1) => void): void;
    getPartyReview(correlationId: string, partyId: string, productId: string, callback: (err: any, review: ReviewV1) => void): void;
    getProductRating(correlationId: string, productId: string, callback: (err: any, rating: RatingV1) => void): void;
    submitReview(correlationId: string, review: ReviewV1, callback: (err: any, rating: RatingV1) => void): void;
    reportHelpful(correlationId: string, reviewId: string, partyId: string, callback: (err: any, review: ReviewV1) => void): void;
    reportAbuse(correlationId: string, reviewId: string, partyId: string, callback: (err: any, review: ReviewV1) => void): void;
    deleteReviewById(correlationId: string, reviewId: string, callback: (err: any, rating: RatingV1) => void): void;
}
```

## <a name="client_null"></a> ReviewsNullClientV1 class

ReviewsNullClientV1 is a dummy client that mimics the real client but doesn't call a microservice. 
It can be useful in testing scenarios to cut dependencies on external microservices.

```typescript
class ReviewsNullClientV1 implements IReviewsClientV1 {
    constructor();
    getReviews(correlationId: string, filter: FilterParams, paging: PagingParams, sorting: SortParams, callback: (err: any, page: DataPage<ReviewV1>) => void): void;
    getReviewById(correlationId: string, reviewId: string, callback: (err: any, review: ReviewV1) => void): void;
    getPartyReview(correlationId: string, partyId: string, productId: string, callback: (err: any, review: ReviewV1) => void): void;
    getProductRating(correlationId: string, productId: string, callback: (err: any, rating: RatingV1) => void): void;
    submitReview(correlationId: string, review: ReviewV1, callback: (err: any, rating: RatingV1) => void): void;
    reportHelpful(correlationId: string, reviewId: string, partyId: string, callback: (err: any, review: ReviewV1) => void): void;
    reportAbuse(correlationId: string, reviewId: string, partyId: string, callback: (err: any, review: ReviewV1) => void): void;
    deleteReviewById(correlationId: string, reviewId: string, callback: (err: any, rating: RatingV1) => void): void;
}
```