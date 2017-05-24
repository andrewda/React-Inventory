import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class AddItem extends Component {
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Add"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />
        ];

        return (
            <div>
                <FloatingActionButton onTouchTap={this.handleOpen}>
                    <ContentAdd/>
                </FloatingActionButton>
                <Dialog title="Add Item" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
                    <TextField hintText="Item name"/><br/>
                    <TextField hintText="Item Id"/><br/>
                    <TextField hintText="Item Status"/><br/>
                </Dialog>
            </div>
        );
    }
}

export default AddItem;
