import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepPurple500, purple200 } from 'material-ui/styles/colors';
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

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
    accent1Color: purple200
  },
  appBar: {
    height: 55
  }
});

const firebaseApp = firebase.initializeApp(config);

class App extends Component {
    componentWillMount() {
        this.props.setFirebaseRef(firebaseApp.database().ref())
        this.props.listenForItemChanges();
        this.props.listenForLocationChanges();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
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
