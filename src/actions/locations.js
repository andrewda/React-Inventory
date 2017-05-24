import { LOCATIONS_REPLACE } from './types';

/**
 * Called every time the firebase ref changes
 */
export function replaceLocations(locations) {
    return {
        type: LOCATIONS_REPLACE,
        value: locations
    };
}

/**
 * Start listening for changes
 */
export function listenForLocationChanges() {
    return (dispatch, getState) => {
        const { firebaseRef } = getState();
        firebaseRef.child('locations').on('value', (snapshot) => {
            dispatch(replaceLocations(snapshot))
        });
    };
}

/**
 * Push a new item
 */
export function pushLocation(location) {
    return (dispatch, getState) => {
        const { firebaseRef } = getState();
        firebaseRef.child('locations').push(location);
    }
}
