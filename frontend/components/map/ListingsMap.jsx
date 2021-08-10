import React from 'react';
import MarkerManager from '../../util/marker_manager';
import {withRouter} from 'react-router-dom';

class ListingsMap extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        let geocoder = new google.maps.Geocoder();
        let that = this;
        const searchLocation = this.props.location.pathname.slice(8);

        geocoder.geocode({'address': searchLocation}, function(results, status){

            let lat = results[0].geometry.location.lat();
            let lng = results[0].geometry.location.lng();
            const mapOptions = {
                center: {
                    lat: lat, lng: lng
                },
                zoom: 13
            }
            let map = new google.maps.Map(that.mapNode, mapOptions);
            that.MarkerManager = new MarkerManager(map,that.handleMarkerClick.bind(that));
            that.MarkerManager.updateMarkers(that.props.listings);
        });
    }

    // componentDidUpdate(){
    //     this.MarkerManager.updateMarkers(this.props.listings);
    // }

    handleMarkerClick(listing) {
        this.props.history.push(`/listings/${listing.id}`);
    }

    render(){
        return (
            <div className='map-container' ref={map => this.mapNode = map}>

            </div>
        )
    }

}

export default withRouter(ListingsMap);