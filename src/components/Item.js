import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Item extends Component {
    render() {
        const { id, name, status, ...other } = this.props;
        return (
            <TableRow {...other}>
                <TableRowColumn>{id}</TableRowColumn>
                <TableRowColumn>{name}</TableRowColumn>
                <TableRowColumn>{status}</TableRowColumn>
            </TableRow>
        );
    }
}

export default Item;
