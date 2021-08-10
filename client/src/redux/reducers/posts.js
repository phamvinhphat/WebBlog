import { createPosts, getPosts, getType, updatePosts } from "../actions";
import { INIT_STATE } from "../../constant";
import { postsState$ } from "../selectors";

export default function postsReducers(state = INIT_STATE.posts, action) {
    switch(action.type) {
        case getType(getPosts.getPostsRequest):
          return{
              ...state,
              isLoading: true,
          };
        case getType(getPosts.getPostSuccess):
            return{
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case getType(getPosts.getPostFailure):
             return{
                ...state,
                isLoading: false,               
            };
        case getType(createPosts.createPostSuccess):
                return{
                   ...state,
                   data: [...state.data , action.payload],                          
            };
            case getType(updatePosts.updatePostSuccess):
                return{
                   ...state,
                   data: state.data.map(post => post._id === action.payload._id ? action.payload : post),                          
            };
        
          
            default:
                return state;
    }
}
