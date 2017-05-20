import React, { Component } from 'react';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Grid from '../components/Grid';
import AppBar from 'material-ui/AppBar';
import Grid from '../components/Grid';

import logo from '../logo.svg';

class MainPage extends Component {
    render() {
        return (
            <div className="App">
                <SideBar />
                <AppBar ishowMenuIconButton={false} />
                <Header imageSource={logo} />
                <Grid />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default MainPage;
