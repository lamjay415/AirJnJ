import React from 'react';
import { connect } from 'react-redux';
import { deleteListing, fetchListing } from '../../actions/listing_actions';
import { withRouter, Link } from 'react-router-dom';
import ListingInfo from '../listings/listingInfo';

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
                <div className='hosting-first'>
                    <div className='hosting-details'>
                        <ListingInfo listing={hosting}/>
                    </div>
                </div>
                <div className='hosting-second'>
                    <Link to={`/hostings/${hosting.id}/edit`} className='hosting-edit'>edit Host</Link>
                </div>
                <div className='hosting-third'>
                    <div onClick={this.handleDelete} className='hosting-delete'>Delete Host</div>
                </div>
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