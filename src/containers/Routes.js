import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './MainPage'

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: MainPage
    }
];

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    {routes.map((route, index) => (<Route key={index} path={route.path} exact={route.exact} component={route.main}/>))}
                </div>
            </Router>
        );
    }
}

export default Routes;
