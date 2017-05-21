import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';

import ToteImage from '../images/tote.jpg';

const cellHeight = 250

const tilesData = [
    {
        img: ToteImage,
        title: 'location 1',
        lastupdate: 'n/a',
        link: "#",
    },
    {
        img: ToteImage,
        title: 'location 2',
        lastupdate: 'n/a',
        link: "#",
    },
    {
        img: ToteImage,
        title: 'location 3',
        lastupdate: 'n/a',
        link: "#",
    },
    {
        img: ToteImage,
        title: 'location 4',
        lastupdate: 'n/a',
        link: "#",
    },
    {
        img: ToteImage,
        title: 'location 5',
        lastupdate: 'n/a',
        link: "#",
    },
    {
        img: ToteImage,
        title: 'location 6',
        lastupdate: 'n/a',
        link: "#",
    }
];

const styles = {
    tile: {
        height: '80%',
        width: '80%',
        margin: 'auto',
        textAlign: 'center'
    }
};

const LocationList = () => (
        <GridList cellHeight={180} cols={3}>
            {tilesData.map((tile, index) => (
                <GridTile>
                    <div style={styles.tile}>
                        <h1>{tile.title}</h1>
                        <RaisedButton label="Go to this location" fullWidth={true}  />
                    </div>
                </GridTile>
            ))}
        </GridList>
);

export default LocationList;
