import React, { Component } from 'react';

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
                <img src={this.props.imageSource} className="App-logo" alt="logo" />
                <h2>{this.state.foo}</h2>
                <button onClick={this.updateMessage}>Button</button>
            </div>
        );
    }

}

export default Header;
