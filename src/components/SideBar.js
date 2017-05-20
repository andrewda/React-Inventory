import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    render() {
        return (
            <div>
                <Drawer open={this.state.open}>
                    <AppBar />
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
            </div>
        );
    }
}

export default SideBar;
