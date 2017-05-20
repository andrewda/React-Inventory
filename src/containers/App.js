import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './Routes';

import store from '../store';

import '../styles/App.css';

injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <Routes />
                </MuiThemeProvider>
            </Provider>
        );
    }
}




export default App;
