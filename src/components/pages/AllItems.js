import React from 'react';
import Paper from 'material-ui/Paper';

import ItemsTable from '../ItemsTable';

const style = {
    position: 'relative',
    width: '90%',
    top: 25,
    left: '5%'
};

const AllItems = (props) => (
    <div className="AllItems page">
        <Paper style={style}>
            <ItemsTable items={props.items} />
        </Paper>
    </div>
);

export default AllItems;
