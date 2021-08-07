import React from "react";
import {
    Avatar, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    CardMedia, 
    IconButton, 
    Typography } 
    from '@material-ui/core';
import MoreVerIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';

export default function Post({post}){
return (
        <Card>
            <CardHeader 
                avatar = {<Avatar>P</Avatar>}
                title = {post.author}
                subheader={moment(post.updateAt).format('HH:MM MMM DD,YYYY')}
                action = {
                    <IconButton>
                        <MoreVerIcon/>
                    </IconButton>
                }
            />
            <CardMedia image={post.attachment} title="Title"/>
            
            <CardContent>
                <Typography variant='h5' color='textPrimary'>{post.title}</Typography>
                <Typography variant='body2' component="p" color='textSecondary'>{post.content}</Typography>             
            </CardContent>

            <CardActions>
                <IconButton>
                    <FavoriteIcon/>
                    <Typography component="span" color="textSecondary">{post.likeCount} Likes</Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
}