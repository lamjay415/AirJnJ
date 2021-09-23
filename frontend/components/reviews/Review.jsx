import React from 'react';

const Review = ({review}) => (
    <div className='review-container'>
        <div className='review-user-container'>
            <div className='review-user-name'>{review.firstName}</div>
        </div>
        <div className='review-content'>{review.txtReview}</div>
    </div>
);

export default Review;