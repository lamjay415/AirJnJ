import * as ListingApi from '../util/listing_api_util';
import { receiveUser } from './user_actions';
export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const REMOVE_LISTING = 'REMOVE_LISTING';
export const RECEIVE_FORM_ERRORS = 'RECEIVE_FORM_ERRORS'
export const CLEAR_FORM_ERRORS = 'CLEAR_FORM_ERRORS';

const receiveAllListings = listings => ({
    type: RECEIVE_ALL_LISTINGS,
    listings
});

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
});

const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
});

export const clearErrors = () => ({
    type: CLEAR_FORM_ERRORS
  });
  
export const receiveErrors = errors => ({
    type: RECEIVE_FORM_ERRORS,
    errors
});

export const fetchListings = () => dispatch => (
    ListingApi.fetchListings()
        .then(listings => dispatch(receiveAllListings(listings)))
);

export const fetchListing = listingId => dispatch => (
    ListingApi.fetchListing(listingId)
        .then(response => {
            dispatch(receiveUser(response.host));
            dispatch(receiveListing(response.listing));
        })
);

export const createListing = listing => dispatch => (
    ListingApi.createListing(listing)
        .then(listing=> dispatch(receiveListing(listing))
    ),err => (dispatch(receiveErrors(err.responseJSON)))
);

export const updateListing = listing => dispatch => (
    ListingApi.updateListing(listing)
        .then(listing=> dispatch(receiveListing(listing)))
)

export const deleteListing = listingId => dispatch => (
    ListingApi.deleteListing(listingId)
        .then(() => dispatch(removeListing(listingId)))
)