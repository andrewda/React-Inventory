import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

const cellHeight = (window.innerHeight-100)/2; // Subtract off for banner

const styles = {
    gridList: {
        textAlign: 'center'
    },
    paper: {
        height: '85%',
        width: '85%',
        margin: 'auto',
        textAlign: 'center'
    },
    header: {
        lineHeight: cellHeight*0.75 + 'px'
    }
};

const Grid = () => (
    <div>
        <GridList cellHeight={cellHeight}>
            <GridTile style={styles.gridList}>
                <Paper style={styles.paper} zDepth={1}>
                    <h1 style={styles.header}>Browse by location</h1>
                </Paper>
            </GridTile>
            <GridTile>
                <Paper style={styles.paper} zDepth={1}>
                    <h1 style={styles.header}>Browse by tote</h1>
                </Paper>
            </GridTile>
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

export default Grid;
