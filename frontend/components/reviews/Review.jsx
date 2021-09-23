import React from 'react';

const Review = ({review}) => (
    <div className='review-container'>
        <div className='review-user-container'>
            <img className='review-user-pic' src='https://a0.muscache.com/defaults/user_pic-50x50.png?v=3'/>
            <div className='review-user'>
                <div className='review-user-name'>{review.firstName}</div>
                <div className='review-date'>{getDate(review.createdAt).month.toString() + ' ' + getDate(review.createdAt).year.toString()}</div>
            </div>
        </div>
        <div className='review-content'>{review.txtReview}</div>
    </div>
);

const getDate = date =>{
    let d = new Date(date.slice(0,10));
    return {month:new Intl.DateTimeFormat('en-US', {month:'long'}).format(d), year:d.getFullYear()};
}

export default Review;