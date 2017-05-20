import React, { Component } from 'react';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import AppBar from 'material-ui/AppBar';
import ToteList from '../components/ToteList'
import Grid from '../components/Grid'

import logo from '../logo.svg';

class MainPage extends Component {
    render() {
        return (
            <div className="App">
                <Grid />
            </div>
        );
    }
}

export default MainPage;
