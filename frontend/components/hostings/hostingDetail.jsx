import React from 'react';
import { connect } from 'react-redux';
import { deleteListing, fetchListing } from '../../actions/listing_actions';
import { withRouter, Link } from 'react-router-dom';

class HostingDetail extends React.Component{
    
    constructor(props){
        super(props);
        // this.handleDelete = this.handleDelete.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.hosting.id);
    }

    handleDelete = (e) => {
        this.props.deleteHosting(this.props.hosting.id);
    }

    render(){
        const {hosting} = this.props;
        return (
            <div className='hosting-item'>
                <div>Title: {hosting.title}</div>
                <div>Description: {hosting.description}</div>
                <div>Location: {hosting.location}</div>
                <div>Price: {hosting.price}</div>
                
                <Link to={`/hostings/${hosting.id}/edit`}>Edit Host</Link>
                <div onClick={this.handleDelete} className='form-button'>Delete Host</div>
            </div>
        )
    }
}

// const mSTP = (state, ownProps) => ({
//     listing: state.entities.listings[ownProps.match.params.id]
// });

const mDTP = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id)),
    deleteHosting: id => dispatch(deleteListing(id))
});

export default withRouter(connect(null, mDTP)(HostingDetail));