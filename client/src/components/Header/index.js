import React from 'react';
import {Typography} from '@material-ui/core';
import userStyles from './styles';

export default function Header(){
    const classes = userStyles();

    return (<Typography className={classes.container}>
        <Typography variant="h4" align="center">
            Blog
        </Typography>
        </Typography>);
        
   
}

