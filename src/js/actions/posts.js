import axios from 'axios';
export const getPosts = () => dispatch => {
    if(localStorage.getItem('reduxState')) {
        const payload = JSON.parse(localStorage.getItem('reduxState')).posts;
        dispatch({type: 'LOAD_LOCALSTORAGE', payload: payload})
    } else {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: res.data.splice(0, 10) });
        }).catch(error => {
            dispatch({ type: 'FETCH_POSTS_ERROR', payload: { error } });
        })
    }
};

export function insertPost(post) {
    return { type: 'INSERT_POST', payload: post }
}