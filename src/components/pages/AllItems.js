import React from 'react';
import Paper from 'material-ui/Paper';

import ItemTable from '../ItemTable';
import AddItem from '../AddItem';

const style = {
    position: 'relative',
    width: '90%',
    top: 25,
    left: '5%'
};

const AllItems = (props) => (
    <div className="AllItems page">
        <Paper style={style}>
            <ItemTable items={props.items} />
            <AddItem />
        </Paper>
    </div>
);

export default AllItems;
