import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MenuLocation from './MenuLocations'

import Navigation from '../navigation';

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
                    <AppBar showMenuIconButton={false} title="FRC Inventory"/>
                    <div>
                        <Link className="MenuItem" to="/">
                            <MenuItem>Home</MenuItem>
                        </Link>
                        <Link className="MenuItem" to="/totes">
                            <MenuItem>Totes</MenuItem>
                        </Link>
                        <Link className="MenuItem" to="/all">
                            <MenuItem>All Items</MenuItem>
                        </Link>
                        <MenuLocation />
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default SideBar;
