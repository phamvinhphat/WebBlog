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
import userStyle from './styles';
import {useDispatch} from 'react-redux';
import { updatePosts } from "../../../redux/actions";


export default function Post({post}){
    const classes = userStyle();
    const dispatch = useDispatch();
    
    const onLikeBtnClick = React.useCallback(()=>{
        dispatch(updatePosts.updatePostRequest({...post, likeCount: post.likeCount + 1}));
    },[dispatch, post]);

    return (
        <Card>
            <CardHeader 
                avatar = {<Avatar>P</Avatar>}
                title = {post.author}
                subheader={moment(post.updatedAt).format('HH:MM MMM DD,YYYY')}
                action = {
                    <IconButton>
                        <MoreVerIcon/>
                    </IconButton>
                }
            />
            <CardMedia image={post.attachment} title="Title" className={classes.media}/>
            
            <CardContent>
                <Typography variant='h5' color='textPrimary'>{post.title}</Typography>
                <Typography variant='body2' component="p" color='textSecondary'>{post.content}</Typography>             
            </CardContent>

            <CardActions>
                <IconButton onClick={onLikeBtnClick}>
                    <FavoriteIcon/>
                    <Typography component="span" color="textSecondary">{post.likeCount} Likes</Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
}