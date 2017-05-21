import React, { Component } from 'react';

import ToteList from '../components/ToteList';

import logo from '../logo.svg';

class MainPage extends Component {
    render() {
        return (
            <div className="ToteList page">
                <ToteList />
            </div>
        );
    }
}

export default MainPage;
