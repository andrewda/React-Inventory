import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import { ListItem } from 'material-ui/List';
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
                    <AppBar showMenuIconButton={false} title="FRC Inventory"/>
                    <div>
                        <Link className="MenuItem" to="/">
                            <ListItem primaryText="Home" />
                        </Link>
                        <Link className="MenuItem" to="/all">
                            <ListItem primaryText="All Items" value="/all" />
                        </Link>
                        <ListItem
                            primaryText="Locations"
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <Link className="MenuItem" to="/totes">
                                    <ListItem style={{"padding-left":25}} primaryText="Totes" />
                                </Link>
                            ]}
                        />
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default SideBar;
