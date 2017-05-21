import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';

import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ThunkMiddleware)(createStore);

export default createStoreWithMiddleware(reducers);
