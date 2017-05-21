import React, { Component } from 'react';

import ItemsTable from '../components/ItemsTable'
import Paper from 'material-ui/Paper';

import logo from '../logo.svg';

const style = {
    position: "relative",
    width: "90%",
    // top: "25px",
    left: "5%"
};

class AllItems extends Component {
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

export default AllItems;
