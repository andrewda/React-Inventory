import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAwwBdlVUGdmKh8hoQstTfceEoWwcgnHlE",
    authDomain: "frc-inventory.firebaseapp.com",
    databaseURL: "https://frc-inventory.firebaseio.com",
    projectId: "frc-inventory",
    storageBucket: "frc-inventory.appspot.com",
    messagingSenderId: "596898757396"
  };

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
