import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const Item = (props) => {
    const { id, name, status, ...other } = props;

    return (
        <TableRow selectable={false} {...other}>
            <TableRowColumn>{id}</TableRowColumn>
            <TableRowColumn>{name}</TableRowColumn>
            <TableRowColumn>{status}</TableRowColumn>
        </TableRow>
    );
}

export default Item;
