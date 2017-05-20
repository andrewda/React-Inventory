import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

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
                    <AppBar showMenuIconButton={false} title="Inventory"/>
                    <div>
                        {Navigation.routes.map((route, index) => {
                            if (route.navigation) {
                                return (
                                    <Link key={index} className="MenuItem" to={route.path}>
                                        <MenuItem>{route.name}</MenuItem>
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default SideBar;
