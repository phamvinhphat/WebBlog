import express, { Router } from 'express';
import {getPosts, createPost, updatePost} from '../controllers/posts.js';


const router = express.Router();

//view
router.get('/',getPosts);

// create post
router.post('/',createPost);

// edit post
router.post('/update',updatePost);

export default router;