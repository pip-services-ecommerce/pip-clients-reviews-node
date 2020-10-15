"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsClientFactory = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const ReviewsNullClientV1_1 = require("../version1/ReviewsNullClientV1");
const ReviewsMemoryClientV1_1 = require("../version1/ReviewsMemoryClientV1");
const ReviewsDirectClientV1_1 = require("../version1/ReviewsDirectClientV1");
const ReviewsHttpClientV1_1 = require("../version1/ReviewsHttpClientV1");
class ReviewsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(ReviewsClientFactory.NullClientV1Descriptor, ReviewsNullClientV1_1.ReviewsNullClientV1);
        this.registerAsType(ReviewsClientFactory.MemoryClientV1Descriptor, ReviewsMemoryClientV1_1.ReviewsMemoryClientV1);
        this.registerAsType(ReviewsClientFactory.DirectClientV1Descriptor, ReviewsDirectClientV1_1.ReviewsDirectClientV1);
        this.registerAsType(ReviewsClientFactory.HttpClientV1Descriptor, ReviewsHttpClientV1_1.ReviewsHttpClientV1);
    }
}
exports.ReviewsClientFactory = ReviewsClientFactory;
ReviewsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-reviews', 'factory', 'default', 'default', '1.0');
ReviewsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-reviews', 'client', 'null', 'default', '1.0');
ReviewsClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-reviews', 'client', 'memory', 'default', '1.0');
ReviewsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-reviews', 'client', 'direct', 'default', '1.0');
ReviewsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-reviews', 'client', 'http', 'default', '1.0');
//# sourceMappingURL=ReviewsClientFactory.js.map