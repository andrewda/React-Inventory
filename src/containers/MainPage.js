import React, { Component } from 'react';

import Header from '../components/Header';
import Tote from '../components/Tote'

import logo from '../logo.svg';

class MainPage extends Component {
    render() {
        return (
            <div className="App">
                <Header imageSource={logo} />
                <Tote />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default MainPage;
