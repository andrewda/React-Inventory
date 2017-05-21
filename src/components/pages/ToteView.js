import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

import ToteList from '../ToteList';

const style = {
    position: 'relative',
    width: '90%',
    top: 25,
    left: '5%'
};

const ToteView = () => (
    <div className="ToteView page">
        <Paper style={style}>
            <Subheader><h1>Totes</h1></Subheader>
            <ToteList />
        </Paper>
    </div>
);

export default ToteView;
