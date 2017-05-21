import * as firebase from 'firebase';

import { ITEMS_REPLACE } from './types';

/**
 * Called every time the firebase ref changes
 */
export function replaceItems(items) {
    return {
        type: ITEMS_REPLACE,
        value: items
    };
}

/**
 * Start listening for changes
 */
export function listenForItemChanges() {
    return (dispatch, getState) => {
        const { firebaseRef } = getState();
        firebaseRef.child('items').on('value', (snapshot) => {
            dispatch(replaceItems(snapshot.val()))
        });
    };
}

/**
 * Push a new item
 */
export function pushItem(item) {
    return (dispatch, getState) => {
        const { firebaseRef } = getState();
        firebaseRef.child('items').push(item);
    }
}
