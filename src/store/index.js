import { createStore, applyMiddleware } from 'redux';
import PromiseMiddleware from 'redux-promise';

import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(PromiseMiddleware)(createStore);

export default createStoreWithMiddleware(reducers);
