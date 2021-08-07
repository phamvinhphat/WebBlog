import React from 'react';
import {Container,Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Header from '../components/Header';
import PostList from '../components/PostList';
import Menu from '../components/Header/Menu';
import useStyles from './styles';

export default function HomePage(){
    const classes = useStyles();

    return (
    
    <Container maxWidth = "lg">
      {/* <Menu/>  */}
        <Header/>
        <PostList/> 
        <Fab color = 'primary' className={classes.fab}>
            <AddIcon/>           
        </Fab> 
    </Container>
    
    );
}