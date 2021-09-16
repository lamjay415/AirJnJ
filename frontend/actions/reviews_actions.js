import * as ReviewApi from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const fetchReviews = () => dispatch => (
    ReviewApi.fetchReviews()
        .then(reviews => dispatch(receiveAllReviews(reviews)))
);

export const fetchReview = reviewId => dispatch => (
    ReviewApi.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
);

export const createReview = review => dispatch => (
    ReviewApi.createReview(review)
        .then(review => dispatch(receiveReview(review)))
);