import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

const cellHeight = 250

const styles = {
  gridList: {
    textAlign: 'center'
  },
  paper: {
    height: '80%',
    width: '80%',
    margin: 'auto',
    textAlign: 'center'
  },
  header: {
    lineHeight: cellHeight*0.75 + 'px'
  }
};

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GridList cellHeight={cellHeight}>
          <GridTile style={styles.gridList}>
            <Paper style={styles.paper} zDepth={1}>
              <h1 style={styles.header}>Browse by location</h1>
            </Paper>
          </GridTile>
            <Paper style={styles.paper} zDepth={1}>
              <h1 style={styles.header}>Browse by tote</h1>
            </Paper>
          <GridTile>
            <Paper style={styles.paper} zDepth={1}>
              <h1 style={styles.header}>Browse by tag</h1>
            </Paper>
          </GridTile>
          <GridTile>
            <Paper style={styles.paper} zDepth={1}>
              <h1 style={styles.header}>View all</h1>
            </Paper>
          </GridTile>
        </GridList>
      </div>
    );
  }
}

export default Grid;
