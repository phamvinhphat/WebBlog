import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostSaga(action){
    try{
        const posts = yield call(api.fetchPosts);
        console.log('[posts]', posts);
        yield put(actions.getPosts.getPostSuccess(posts.data));
    } catch(err){

        console.log(err)
        yield put(actions.getPosts.getPostFailure(err));
    }  
}

function* createPostSaga(action){
    try{
        console.log('createPostSaga',{action});
        const post = yield call(api.createPosts, action.payload);
        console.log('[createPostSaga - posts]', post);
        yield put(actions.createPosts.createPostSuccess(post.data));
    } catch(err){

        console.log(err);
        yield put(actions.createPosts.createPostFailure(err));
    }

}

function* updatePostSaga(action){
    try{
        console.log('UpdatePostSaga',{action});
        const updatePost = yield call(api.updatePost, action.payload);
        console.log('[updatePostSaga - posts]', updatePost);
        yield put(actions.updatePosts.updatePostSuccess(updatePost.data));
    } catch(err){

        console.log(err);
        yield put(actions.updatePosts.updatePostFailure(err));
    }

}

function* mySaga(){
    yield takeLatest(actions.getPosts.getPostsRequest,fetchPostSaga);
    yield takeLatest(actions.createPosts.createPostRequest,createPostSaga);
    yield takeLatest(actions.updatePosts.updatePostRequest,updatePostSaga);  
}

export default mySaga;