import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage'

import Navigation from '../navigation';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    {Navigation.routes.map((route, index) => (
                        <Route key={index} {...route} />
                    ))}
                </div>
            </Router>
        );
    }
}

export default Routes;
