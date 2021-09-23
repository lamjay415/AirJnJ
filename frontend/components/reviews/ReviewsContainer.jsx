import React from 'react';
import { fetchReviews, createReview } from '../../actions/reviews_actions';
import { selectMyReviews } from '../../reducers/selectors';
import { connect } from 'react-redux';
import Review from './Review';

class ReviewsContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            txtReview: '',
            listingId: this.props.listing,
            userId: this.props.currentUser
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchReviews();
    }

    handleSubmit(){
        this.props.createReview(this.state);
    }

    render(){
        let listingReviews = this.props.reviews.map((review,idx) => {
            return (
                <Review review={review} key={`rv${idx}`}/>
            )
        })
        return(
            <div className='reviews-component'>
                <div className='reviews-header'>Reviews</div>
                <div className='reviews-container'>
                    {listingReviews}
                </div>
                {!this.props.currentUser ? null :
                <div className='write-review'>
                    <div className='reviews-header'>Write a public review</div>
                    <div className='write-review-subheader'>Tell the next guests what you loved and anything else they should know about this place</div>
                    <form onSubmit={this.handleSubmit} className='review-form'>
                        <textarea className='review-text' onChange={(e) => this.setState({txtReview:e.currentTarget.value})}/>
                        <input type='submit' value='Add Review' className='form-button'/>
                    </form>
                </div>  
                }
            </div>
        )
    }
};

const mSTP = (state, ownProps) => ({
    reviews: selectMyReviews(state, ownProps.listing),
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    createReview: review => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(ReviewsContainer);

