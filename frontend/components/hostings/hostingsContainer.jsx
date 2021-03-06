import React from 'react';
import { connect } from 'react-redux';
import { deleteListing, fetchListings } from '../../actions/listing_actions';
import { selectMyHostings } from '../../reducers/selectors';
// import SecondaryHeader from '../SecondaryHeader'
import Header from '../Header';
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
                <Header className='secondary-header-container'/>
                <div className='hostings-container'>
                    <div className='hostings-body'>
                        <div className='hostings-header'>Review your listings</div>
                        <div className='hostings-items'>
                            {hostings}
                        </div>
                    </div>
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