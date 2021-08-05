import{createActions} from 'redux-actions';

export const getType = (ReduxActions) => {
    return ReduxActions().type;
};

export const getPosts = createActions({
    getPostRequest: undefined,
    getPostSuccess: (payload) => payload,
    getPostFailure: (err) => err,

})