import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

import Navigation from '../navigation';

class MenuLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    render() {
        return (
            <Link className="MenuItem" to="/">
                <MenuItem insetChildren={true}> Locations
                    <Link className="MenuItem" to="/totes">
                        <MenuItem>Totes</MenuItem>
                    </Link>
                </MenuItem>
            </Link>
        );
    }
}

export default MenuLocation;
