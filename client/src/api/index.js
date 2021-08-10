import axios from 'axios';

//const URL = 'http://localhost:5000';

export const fetchPosts = () =>axios.get('http://localhost:5000/posts');
export const createPosts = (payload) =>axios.post('http://localhost:5000/posts',payload);
export const updatePost = (payload) =>axios.post('http://localhost:5000/posts/update',payload);