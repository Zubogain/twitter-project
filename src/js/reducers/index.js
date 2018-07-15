import { combineReducers } from 'redux';
import posts from './posts.js';
import auth from './auth.js';
import profile from './profile.js'
import token from './token.js';

export default combineReducers({
    posts,
    auth,
    profile,
    token,
});
