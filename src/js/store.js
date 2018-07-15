import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers/index.js';
import { loadPosts } from './actions/posts.js';
import { setTimeUpdate } from './actions/token.js';

let initialState = localStorage.getItem('reduxState');

if(!initialState) {
    initialState = undefined;
} else {
    initialState = JSON.parse(initialState);
}

const store = createStore(reducer, initialState, applyMiddleware(ReduxThunk));

store.dispatch(loadPosts());

if(store.getState().auth != null) {
    store.dispatch(setTimeUpdate());
}

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;