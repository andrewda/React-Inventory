import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import ContentUnarchive from 'material-ui/svg-icons/content/unarchive';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionLabel from 'material-ui/svg-icons/action/label';
import ActionViewList from 'material-ui/svg-icons/action/view-list';

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
    },
    icon: {
        width: 40,
        height: 40,
        verticalAlign: 'middle',
        margin: 5
    }
};

const Grid = () => (
    <div>
        <GridList cellHeight={cellHeight}>
            <GridTile style={styles.gridList}>
                <Paper style={styles.paper} zDepth={1}>
                    <Link to={'/locations'} style={styles.link}>
                        <h1 style={styles.header}>
                            <CommunicationLocationOn style={styles.icon} />
                            Browse by location
                        </h1>
                    </Link>
                </Paper>
            </GridTile>
            <GridTile>
                <Paper style={styles.paper} zDepth={1}>
                    <Link to={'/totes'} style={styles.link}>
                        <h1 style={styles.header}>
                            <ContentUnarchive style={styles.icon} />
                            Browse by tote
                        </h1>
                    </Link>
                </Paper>
            </GridTile>
            <GridTile>
                <Paper style={styles.paper} zDepth={1}>
                    <h1 style={styles.header}>
                        <ActionLabel style={styles.icon} />
                        Browse by tag
                    </h1>
                </Paper>
            </GridTile>
            <GridTile>
                <Paper style={styles.paper} zDepth={1}>
                    <Link to={'/items'} style={styles.link}>
                        <h1 style={styles.header}>
                            <ActionViewList style={styles.icon} />
                            View all
                        </h1>
                    </Link>
                </Paper>
            </GridTile>
        </GridList>
    </div>
);

export default Grid;
