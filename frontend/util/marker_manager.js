export default class MarkerManager {

    constructor(map, handleMarkerClick){
        this.map = map;
        this.markers = {};
        this.handleClick = handleMarkerClick;
        this.createMarker = this.createMarker.bind(this);
        this.removeMarker = this.removeMarker.bind(this);
        this.updateMarkers = this.updateMarkers.bind(this);
    }

    updateMarkers(listings){
        const listingsObj = {};
        listings.forEach(listing => listingsObj[listings.id] = listing);

        listings
            .filter(listing => !this.markers[listing.id])
            .forEach(newListing => this.createMarker(newListing));

        Object.keys(this.markers)
            .filter(listingId=> !listingObjs[listingId])
            .forEach((listingId) => this.removeMarker(this.markers[listingId]));
        
    }

    createMarker(listing){
        const geocoder = new google.maps.Geocoder();
        // const curMap = this.map;
        // const curMarkers = this.markers;
        let that = this;
        geocoder.geocode({'address': listing.location}, function(results, status){
            let marker = new google.maps.Marker({
                map: that.map,
                position: results[0].geometry.location,
                listingId: listing.id,
                label: '$'+listing.price.toString()
            });
            marker.addListener('click', () => that.handleClick(listing));
            that.markers[marker.listingId] = marker;
            }
        );
        // this.markers = curMarkers;
    }

    removeMarker(marker){
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
    }

}