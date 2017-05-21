import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';

import * as firebase from 'firebase';

import Routes from './Routes';

import store from '../store';

import '../styles/App.css';

const config = {
    apiKey: "AIzaSyAwwBdlVUGdmKh8hoQstTfceEoWwcgnHlE",
    authDomain: "frc-inventory.firebaseapp.com",
    databaseURL: "https://frc-inventory.firebaseio.com",
    projectId: "frc-inventory",
    storageBucket: "frc-inventory.appspot.com",
    messagingSenderId: "596898757396"
};

firebase.initializeApp(config);


firebase.database().ref('items/').set({
    id: "1",
    name: "test1",
    description : "test1"
 });
 
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <div>
                        <AppBar showMenuIconButton={false} />
                        <Routes />
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}




export default App;
