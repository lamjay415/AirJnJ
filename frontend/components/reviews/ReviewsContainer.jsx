import React from 'react';
import { fetchReviews } from '../../actions/reviews_actions';
import { selectMyReviews } from '../../reducers/selectors';
import { connect } from 'react-redux';
import { createReview } from '../../util/review_api_util';

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
        debugger;
        return(
            <div className='reviews-container'>
                <div>Reviews</div>
                <form onSubmit={this.handleSubmit} className='review-form'>
                    <textarea onChange={(e) => this.setState({txtReview:e.currentTarget.value})}/>
                    <input type='submit' value='Add Review' className='form-button'/>
                </form>
            </div>
        )
    }
};

const mSTP = (state, ownProps) => ({
    reviews: selectMyReviews(state, ownProps.listing)
});

const mDTP = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    createReview: review => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(ReviewsContainer);

