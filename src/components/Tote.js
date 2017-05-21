import React from 'react';
import { GridTile } from 'material-ui/GridList';

const Tote = (props) => (
    <GridTile
        title={props.name}
        subtitle={<span>Last updated: <b>{props.lastUpdate}</b></span>}
    >
        <img src={props.img} alt="Tote" />
    </GridTile>
);

export default Tote;
