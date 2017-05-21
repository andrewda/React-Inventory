import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import * as firebase from 'firebase';

import Routes from './Routes';

import * as actions from '../actions/firebaseRef';

import '../styles/App.css';

injectTapEventPlugin();

const config = {
    apiKey: "AIzaSyAwwBdlVUGdmKh8hoQstTfceEoWwcgnHlE",
    authDomain: "frc-inventory.firebaseapp.com",
    databaseURL: "https://frc-inventory.firebaseio.com",
    projectId: "frc-inventory",
    storageBucket: "frc-inventory.appspot.com",
    messagingSenderId: "596898757396"
};

const firebaseApp = firebase.initializeApp(config);

class App extends Component {
    componentWillMount() {
        this.props.setFirebaseRef(firebaseApp.database().ref())
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar showMenuIconButton={false} />
                    <Routes />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(null, actions)(App);
