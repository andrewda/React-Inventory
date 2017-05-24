import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';

import LocationModel from '../models/Location';

const styles = {
    tile: {
        height: '80%',
        width: '80%',
        margin: 'auto',
        textAlign: 'center'
    }
};

const renderLocations = (props) => {
    const locations = [];

    props.locations.forEach((snap) => {
        const { name } = new LocationModel(snap.val());
        locations.push(
            <GridTile key={snap.key}>
                <div style={styles.tile}>
                    <h1>{name}</h1>
                    <RaisedButton label="Go to this location" fullWidth={true}  />
                </div>
            </GridTile>
        );
    });

    return locations;
};

const LocationList = (props) => (
    <GridList cellHeight={180} cols={3}>
        {renderLocations(props)}
    </GridList>
);

export default LocationList;
