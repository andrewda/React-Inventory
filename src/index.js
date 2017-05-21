import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
