import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Drawer from 'material-ui/Drawer';
import { ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = { open: true };
    }

    render() {
        return (
            <div>
                <Drawer open={this.state.open}>
                    <AppBar showMenuIconButton={false} title="FRC Inventory"/>
                    <div>
                        <ListItem
                            primaryText="Home"
                            onClick={() => { this.props.history.push('/') }} />
                        <ListItem
                            primaryText="All Items"
                            onClick={() => { this.props.history.push('items') }} />
                        <ListItem
                            primaryText="Locations"
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key="Totes"
                                    primaryText="Totes"
                                    onClick={() => { this.props.history.push('totes') }} />
                            ]} />
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default withRouter(SideBar);
