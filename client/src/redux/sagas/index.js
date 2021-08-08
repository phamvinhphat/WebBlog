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
        yield put(action.getPosts.getPostFailure(err));
    }  
}

function* createPostSaga(action){
    try{
        const post = yield call(api.createPosts, action.payload);
        console.log('[createPostSaga - posts]', post);
        yield put(actions.createPosts.createPostSuccess(post.data));
    } catch(err){

        console.log(err);
        yield put(action.createPosts.createPostFailure(err));
    }

}

function* mySaga(){
    yield takeLatest(actions.getPosts.getPostsRequest,fetchPostSaga );
    yield takeLatest(actions.createPosts.createPostRequest,createPostSaga );

}

export default mySaga;