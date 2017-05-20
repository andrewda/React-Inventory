import React, { Component } from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class Tote extends Component {
    render() {
        return (
                <GridTile
                  key={this.props.name}
                  title={this.props.name}
                  subtitle={<span>Last updated: <b>{this.props.lastupdate}</b></span>}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                  <img src={this.props.img} />
                </GridTile>
        )
    }
}

export default Tote;
