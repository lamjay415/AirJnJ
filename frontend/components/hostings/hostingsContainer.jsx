import React from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';

const mSTP = (state,ownProps) => ({
    hostings: 
});

const mDTP = dispatch => ({
    fetchHostings: () => dispatch(fetchListings())
})

class HostingIndex extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

export default connect(mSTP, mDTP)(HostingIndex);