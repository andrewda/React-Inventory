import React, { Component } from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class Item extends Component {
    render() {
        return (
          <TableRow>
            <TableRowColumn>{this.props.id}</TableRowColumn>
            <TableRowColumn>{this.props.name}</TableRowColumn>
            <TableRowColumn>{this.props.description}</TableRowColumn>
          </TableRow>
        )
    }
}

export default Item;
