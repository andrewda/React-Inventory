import React from 'react';
import { withRouter } from 'react-router';
import Drawer from 'material-ui/Drawer';
import { ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';

const SideBar = (props) => (
    <Drawer open={true}>
        <AppBar showMenuIconButton={false} title="FRC Inventory"/>
        <div>
            <ListItem
                primaryText="Home"
                onClick={() => { props.history.push('/') }} />
            <ListItem
                primaryText="All Items"
                onClick={() => { props.history.push('items') }} />
            <ListItem
                primaryText="Locations"
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem
                        key="Totes"
                        primaryText="Totes"
                        onClick={() => { props.history.push('totes') }} />
                ]} />
        </div>
    </Drawer>
);

export default withRouter(SideBar);
