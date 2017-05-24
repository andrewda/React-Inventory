import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import * as firebase from 'firebase';

import Routes from '../components/Routes';

import { setFirebaseRef } from '../actions/firebaseRef';
import { listenForItemChanges } from '../actions/items';
import { listenForLocationChanges } from '../actions/locations';

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
        this.props.listenForItemChanges();
        this.props.listenForLocationChanges();
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

const mapDispatchToProps = (dispatch) => ({
    setFirebaseRef: (ref) => dispatch(setFirebaseRef(ref)),
    listenForItemChanges: () => dispatch(listenForItemChanges()),
    listenForLocationChanges: () => dispatch(listenForLocationChanges())
});

export default connect(null, mapDispatchToProps)(App);
