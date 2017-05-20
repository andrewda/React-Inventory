import React, { Component } from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Tote;

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
    img: 'images/tote.jpg',
    title: 'tote1',
    lastupdate: 'n/a',
    href: "#",
    },
    {
    img: 'images/tote.jpg',
    title: 'tote2',
    lastupdate: 'n/a',
    href: "#",
    },
    {
    img: 'images/tote.jpg',
    title: 'tote3',
    lastupdate: 'n/a',
    href: "#",
    },
    {
    img: 'images/tote.jpg',
    title: 'tote4',
    lastupdate: 'n/a',
    href: "#",
    },
    {
    img: 'images/tote.jpg',
    title: 'tote5',
    lastupdate: 'n/a',
    href: "#",
    },
    {
    img: 'images/tote.jpg',
    title: 'tote6',
    lastupdate: 'n/a',
    href: "#",
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
        <Tote name={} img="images/tote.jpg" />
      {tilesData.map((tile) => (
          <Tote name={tile.title} img={tile.img} />
      ))}
    </GridList>
  </div>
);

export default ToteList;
