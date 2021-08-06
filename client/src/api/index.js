import axios from 'axios';

//const URL = 'http://localhost:5000';

export const fetchPosts = () =>axios.get('http://localhost:5000/posts');
