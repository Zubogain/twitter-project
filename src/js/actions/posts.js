import axios from 'axios';

export const loadPosts = () => (dispatch, getState) => {
    const { list } = getState().posts;
    if(!list.length) {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: { list: res.data.splice(0, 10), error: false } });
        }).catch(error => {
            dispatch({ type: 'FETCH_POSTS_ERROR', payload: { list: [].concat(list), error: error.message } });
        });
    } else {
        dispatch({ type: null });
    }
};
export const insertPost = (post) => {

    return { type: 'INSERT_POST', payload: post };
};