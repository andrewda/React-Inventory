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
        const { yourProps, ...other } = this.props;
        return (
          <TableRow {...other}>
            <TableRowColumn>{this.props.id}</TableRowColumn>
            <TableRowColumn>{this.props.name}</TableRowColumn>
            <TableRowColumn>{this.props.description}</TableRowColumn>
          </TableRow>
        )
    }
}

export default Item;
