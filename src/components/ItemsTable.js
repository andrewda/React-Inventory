import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Item from "./Item";

class ItemsTable extends Component {
    renderItems() {
        const items = [];

        this.props.items.forEach((snap) => {
            const { name, status } = snap.val();
            items.push(<Item key={snap.key} id={snap.key} name={name} status={status} />);
        });

        return items;
    }

    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.renderItems.call(this)}
                </TableBody>
            </Table>
        );
    }
}

export default ItemsTable;
