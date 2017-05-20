import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import logo from '../logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'FRC Inventory'
        };

        this.updateMessage = this.updateMessage.bind(this);
        this.updateMessage2 = this.updateMessage2.bind(this);
    }

    updateMessage() {
        this.setState({title: 'YEAH BOIIIIII'});
    }

    updateMessage2() {
        this.setState({title: 'This is my second message!'});
    }

    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>{this.state.title}</h2>
                <RaisedButton primary={true} label="Click Me!" onClick={this.updateMessage}/>
                <RaisedButton secondary={true} label="Click me for another message!" onClick={this.updateMessage2}/>
                <RaisedButton default={true} label="This will change the description" onClick={this.updateMessage2}/>

            </div>
        );
    }

}

export default Header;
