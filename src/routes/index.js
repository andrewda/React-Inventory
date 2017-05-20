import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../containers/App';
import MainPage from '../containers/MainPage';

export default (
    <Router component={App}>
        <Route path="/" component={MainPage} />
    </Router>
);
