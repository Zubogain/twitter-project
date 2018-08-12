import axios from 'axios';
export const loadPosts = () => (dispatch, getState) => {
    const { list } = getState().posts;
    if(!list.length) {
        axios.get(`https://twitter-project-3a9f5.firebaseio.com/posts.json?auth=keyQuwEPBY9uBLREGAqpjIB7bmnk3GkFsxMqqApm`).then(posts => {
            posts.data.forEach(post => {
                axios.get(`https://twitter-project-3a9f5.firebaseio.com/users/${post.userId}/name.json?auth=keyQuwEPBY9uBLREGAqpjIB7bmnk3GkFsxMqqApm`).then(postUserName => {
                    post.userName = postUserName.data;
                    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: { post, error: false } });
                });
            });
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