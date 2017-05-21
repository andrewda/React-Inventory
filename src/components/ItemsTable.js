import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

import Item from './Item';

import ItemModel from '../models/Item';

const renderItems = (props) => {
    const items = [];

    props.items.forEach((snap) => {
        const { name, statusText } = new ItemModel(snap.val());
        items.push(<Item key={snap.key} id={snap.key} name={name} status={statusText} />);
    });

    return items;
};

const ItemsTable = (props) => (
    <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
                <TableHeaderColumn>Item ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            {renderItems(props)}
        </TableBody>
    </Table>
);

export default ItemsTable;
