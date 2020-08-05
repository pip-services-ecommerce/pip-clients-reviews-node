import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { ReviewsNullClientV1 } from '../version1/ReviewsNullClientV1';
import { ReviewsMemoryClientV1 } from '../version1/ReviewsMemoryClientV1';
import { ReviewsDirectClientV1 } from '../version1/ReviewsDirectClientV1';
import { ReviewsHttpClientV1 } from '../version1/ReviewsHttpClientV1';

export class ReviewsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-reviews', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-reviews', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('pip-services-reviews', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-reviews', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-reviews', 'client', 'http', 'default', '1.0');

	constructor() {
		super();

		this.registerAsType(ReviewsClientFactory.NullClientV1Descriptor, ReviewsNullClientV1);
		this.registerAsType(ReviewsClientFactory.MemoryClientV1Descriptor, ReviewsMemoryClientV1);
		this.registerAsType(ReviewsClientFactory.DirectClientV1Descriptor, ReviewsDirectClientV1);
		this.registerAsType(ReviewsClientFactory.HttpClientV1Descriptor, ReviewsHttpClientV1);
	}

}
