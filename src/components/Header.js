import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import logo from '../logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { foo: 'Hello World' };

        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
        this.setState({ foo: 'New Message' });
    }

    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{this.state.foo}</h2>
                <RaisedButton primary={true} label="Click Me!" onClick={this.updateMessage} />
            </div>
        );
    }

}

export default Header;
