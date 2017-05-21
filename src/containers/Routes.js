import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SideBar from '../components/SideBar';

import Navigation from '../navigation';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <SideBar />
                    {Navigation.routes.map((route, index) => (
                        <Route key={index} {...route} />
                    ))}
                </div>
            </Router>
        );
    }
}

export default Routes;
