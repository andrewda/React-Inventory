import { combineReducers } from 'redux';

import items from './items';
import locations from './locations';
import firebaseRef from './firebaseRef';

const rootReducer = combineReducers({
    items, locations, firebaseRef
});

export default rootReducer;
