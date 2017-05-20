import React, { Component } from 'react';

import Header from '../components/Header';
import SideBar from '../components/SideBar';

import logo from '../logo.svg';

class MainPage extends Component {
    render() {
        return (
            <div className="App">
                <SideBar />
                <Header imageSource={logo} />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default MainPage;
