import React from 'react';

const Review = ({review}) => (
    <div>
        <div>{review.firstName}</div>
        <div>{review.txtReview}</div>
    </div>
);

export default Review;