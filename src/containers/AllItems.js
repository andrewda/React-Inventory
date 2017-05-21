import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemsTable from '../components/ItemsTable'
import Paper from 'material-ui/Paper';

import * as actions from '../actions/items';

import logo from '../logo.svg';

const style = {
    position: "relative",
    width: "90%",
    // top: "25px",
    left: "5%"
};

class AllItems extends Component {
    componentDidMount() {
        this.props.listenForItemChanges();
    }

    render() {
        return (
            <div className="AllItems page">
                <Paper style={style}>
                    <ItemsTable />
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.items
});

export default connect(mapStateToProps, actions)(AllItems);
