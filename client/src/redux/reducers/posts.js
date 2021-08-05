import { getPosts, getType } from "../actions";
import { INIT_STATE } from "../../constant";

export default function postsReducers(state = INIT_STATE.posts,action){
    switch(action.type){
        case getType(getPosts.getPostRequest()):
          return{
              ...state,
              isLoading: true,
          }
        case getType(getPosts.getPostSuccess()):
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getPosts.getPostFailure()):
             return{
                ...state,
                isLoading: false,               
                } 
            default:
                return state;
    }
}
