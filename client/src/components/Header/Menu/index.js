import React from 'react';
import {Typography} from '@material-ui/core';
import userStyles from './styles';

export default function Menu(){
    const classes = userStyles();
    return(<Typography className={classes.container}>
        <Typography>
            <div id = "menu">
                {/* <ul>
                    <li><a href="#"> Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Desig</a></li>
                </ul> */}
            </div>
        </Typography> 
    </Typography>);
}
