import React from 'react';
import { GridList } from 'material-ui/GridList';
import Tote from './Tote';

import ToteImage from '../images/tote.jpg';

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
    }
];

const ToteList = () => (
        <GridList
            cellHeight={180}
            cols={3}
        >
            {tilesData.map((tile, index) => (
                <Tote key={index} name={tile.title} img={tile.img} />
            ))}
        </GridList>
);

export default ToteList;
