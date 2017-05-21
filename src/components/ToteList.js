import React, { Component } from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Tote from './Tote';

import ToteImage from '../images/tote.jpg';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 750,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
    {
    img: ToteImage,
    title: 'tote1',
    lastupdate: 'n/a',
    link: "#",
    },
    {
    img: ToteImage,
    title: 'tote2',
    lastupdate: 'n/a',
    link: "#",
    },
    {
    img: ToteImage,
    title: 'tote3',
    lastupdate: 'n/a',
    link: "#",
    },
    {
    img: ToteImage,
    title: 'tote4',
    lastupdate: 'n/a',
    link: "#",
    },
    {
    img: ToteImage,
    title: 'tote5',
    lastupdate: 'n/a',
    link: "#",
    },
    {
    img: ToteImage,
    title: 'tote6',
    lastupdate: 'n/a',
    link: "#",
    },
];

const ToteList = () => (
  <div style={styles.root}>
    <Subheader><h1>Totes</h1></Subheader>
    <GridList
      cellHeight={180}
      cols={3}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
          <a href={tile.link}><Tote name={tile.title} img={tile.img} /></a>
      ))}
    </GridList>
  </div>
);

export default ToteList;
