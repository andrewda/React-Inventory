import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

import LocationList from '../LocationList';

const style = {
    position: 'relative',
    width: '90%',
    top: 25,
    left: '5%'
};

const AllLocations = (props) => (
    <div className="AllLocations page">
        <Paper style={style}>
            <Subheader><h1>Locations</h1></Subheader>
            <LocationList locations={props.locations} />
        </Paper>
    </div>
);

export default AllLocations;
