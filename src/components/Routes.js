import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SideBar from './SideBar';

import Navigation from '../navigation';

const Routes = () => (
    <Router>
        <div>
            <SideBar />
            {Navigation.routes.map((route, index) => (
                <Route key={index} {...route} />
            ))}
        </div>
    </Router>
);

export default Routes;
