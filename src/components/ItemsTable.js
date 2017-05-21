import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';
import Item from "./Item";

const renderItems = (props) => {
    const items = [];

    props.items.forEach((snap) => {
        const { name, status } = snap.val();
        items.push(<Item key={snap.key} id={snap.key} name={name} status={status} />);
    });

    return items;
};

const ItemsTable = (props) => (
    <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
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
