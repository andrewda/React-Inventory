import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import Header from '../components/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header imageSource={logo} />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
