export const fetchReviews = () => (
    $.ajax({
        method: 'GET',
        url: 'api/reviews/'
    })
);

export const createReview  = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews/',
        data: {review}
    })
);

export const fetchReview = reviewId => (
    $.ajax({
        method: 'GET',
        url: `api/reviews/${reviewId}`
    })
);