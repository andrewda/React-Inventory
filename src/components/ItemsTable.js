import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Item from "./Item";

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const ItemsTable = () => (
  <Table>
    <TableHeader displaySelectAll={true} adjustForCheckbox={true}>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={true}>
        <Item id="1" name="test1" description="test1" />
        <Item id="1" name="test1" description="test1" />
        <Item id="1" name="test1" description="test1" />
        <Item id="1" name="test1" description="test1" />
        <Item id="1" name="test1" description="test1" />
    </TableBody>
  </Table>
);

export default ItemsTable;
