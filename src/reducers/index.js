import { combineReducers } from 'redux';

import ItemsReducer from './items';

const rootReducer = combineReducers({
    items: ItemsReducer,
});

export default rootReducer;
