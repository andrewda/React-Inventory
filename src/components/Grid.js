import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

const styles = {
  gridList: {
    textAlign: 'center'
  },
  paper: {
    height: '80%',
    width: '80%',
    margin: 'auto',
    textAlign: 'center',
  }
};

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GridList cellHeight={200}>
          <GridTile styles={styles.gridList}>
            <Paper style={styles.paper} zDepth={1}>
              <h1>Browse by location</h1>
            </Paper>
          </GridTile>
            <Paper style={styles.paper} zDepth={1}>
              <h1>Browse by location</h1>
            </Paper>
          <GridTile>
            <Paper style={styles.paper} zDepth={1}>
              <h1>Browse by location</h1>
            </Paper>
          </GridTile>
          <GridTile>
            <Paper style={styles.paper} zDepth={1}>
              <h1>Browse by location</h1>
            </Paper>
          </GridTile>
        </GridList>
      </div>
    );
  }
}

export default Grid;
