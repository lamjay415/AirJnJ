import React from 'react';

class ListingDetail extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        const {listing} = this.props;
        return(
            <div>
                <div>Title: {listing.title}</div>
                <div>Description: {listing.description}</div>
                
                <div>Location: {listing.location}</div>
                <div>Price: {listing.price}</div>
            </div>
        )
    }

}

export default ListingDetail;