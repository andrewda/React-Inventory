import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

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
    },
    link: {
        textDecoration: 'none',
        color: '#000000'
    }
};

const Grid = () => (
    <div>
        <GridList cellHeight={cellHeight}>
            <GridTile style={styles.gridList}>
                <Paper style={styles.paper} zDepth={1}>
                    <Link to={'/locations'} style={styles.link}>
                        <h1 style={styles.header}>Browse by location</h1>
                    </Link>
                </Paper>
            </GridTile>
            <GridTile>
                <Paper style={styles.paper} zDepth={1}>
                    <Link to={'/totes'} style={styles.link}>
                        <h1 style={styles.header}>Browse by tote</h1>
                    </Link>
                </Paper>
            </GridTile>
            <GridTile>
                <Paper style={styles.paper} zDepth={1}>
                    <h1 style={styles.header}>Browse by tag</h1>
                </Paper>
            </GridTile>
            <GridTile>
                <Paper style={styles.paper} zDepth={1}>
                    <Link to={'/items'} style={styles.link}>
                        <h1 style={styles.header}>View all</h1>
                    </Link>
                </Paper>
            </GridTile>
        </GridList>
    </div>
);

export default Grid;
