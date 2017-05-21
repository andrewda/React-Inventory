import React, { Component } from 'react';
import { GridTile } from 'material-ui/GridList';

class Tote extends Component {
    render() {
        return (
            <GridTile
                key={this.props.name}
                title={this.props.name}
                subtitle={<span>Last updated: <b>{this.props.lastupdate}</b></span>}
            >
                <img src={this.props.img} alt="Tote" />
            </GridTile>
        );
    }
}

export default Tote;
