import { ReviewsClientFixtureV1 } from './ReviewsClientFixtureV1';
import { ReviewsMemoryClientV1 } from '../../src/version1/ReviewsMemoryClientV1';

suite('ReviewsMemoryClientV1', () => {
    let client: ReviewsMemoryClientV1;
    let fixture: ReviewsClientFixtureV1;

    suiteSetup(() => {
        client = new ReviewsMemoryClientV1();

        fixture = new ReviewsClientFixtureV1(client);

    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
