import * as UserApi from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

// export const fetchListing = listingId => dispatch => (
//     ListingApi.fetchListing(listingId)
//         .then(listing => dispatch(receiveListing(listing)))
// );

export const fetchUser = userId => dispatch => (
    UserApi.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
);