import React from 'react';
import { connect } from 'react-redux';
import { deleteListing, fetchListings } from '../../actions/listing_actions';
import { selectMyHostings } from '../../reducers/selectors';
import SecondaryHeader from '../SecondaryHeader'
import HostingDetail from './hostingDetail';

class HostingIndex extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchHostings();
    }

    render(){
        const hostings = this.props.hostings.map((hosting,idx) => {
            return (<HostingDetail hosting={hosting} 
                key={`hosting${idx}`} 
                />)
        });
        return (
            <div>
                <SecondaryHeader/>
                <div>
                    {hostings}
                </div>
            </div>
        )
    }
}

const mSTP = (state) => ({
    hostings: selectMyHostings(state)
});

const mDTP = dispatch => ({
    fetchHostings: () => dispatch(fetchListings())
});

export default connect(mSTP, mDTP)(HostingIndex);