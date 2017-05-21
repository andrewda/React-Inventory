import { combineReducers } from 'redux';

import items from './items';
import firebaseRef from './firebaseRef';

const rootReducer = combineReducers({
    items, firebaseRef
});

export default rootReducer;
