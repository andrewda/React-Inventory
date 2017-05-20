import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from '../components/Header';

import store from '../store';
import routes from '../routes';

import '../styles/App.css';

injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <Header />
                </MuiThemeProvider>
            </Provider>
            // <div className="App">
            //     <Header imageSource={logo} />
            //     <p className="App-intro">
            //         To get started, edit <code>src/App.js</code> and save to reload.
            //     </p>
            // </div>
        );
    }
}




export default App;
