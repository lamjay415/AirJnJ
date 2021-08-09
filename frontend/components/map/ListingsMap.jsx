import React from 'react';
import MarkerManager from '../../util/marker_manager';
import {withRouter} from 'react-router-dom';

class ListingsMap extends React.Component{

    constructor(props){
        super(props);
        this.lat = '';
        this.lng = '';
    }

    componentDidMount(){
        let geocoder = new google.maps.Geocoder();
        let that = this;
        const searchLocation = this.props.location.pathname.slice(8);
        geocoder.geocode({'address': searchLocation}, function(results, status){
            that.lat = parseFloat(results[0].geometry.location.lat().toFixed(3));
            that.lng = parseFloat(results[0].geometry.location.lng().toFixed(3));
            const mapOptions = {
                center: {
                    lat: that.lat, lng: that.lng
                },
                zoom: 13
            }
            that.map = new google.maps.Map(that.mapNode, mapOptions);
        });
        this.MarkerManager = new MarkerManager(this.map,this.handleMarkerClick.bind(this));
        this.MarkerManager.updateMarkers(this.props.listings);
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.listings);
    }

    handleMarkerClick(listing) {
        this.props.history.push(`listings/${listing.id}`);
    }

    render(){
        return (
            <div className='map-container' ref={map => this.mapNode = map}>

            </div>
        )
    }

}

export default withRouter(ListingsMap);