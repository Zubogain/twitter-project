import axios from 'axios';
import { getProfile, createProfile } from './profile.js';
import { setTimeUpdate } from './token.js';

const key = 'AIzaSyBEmZPZacwxXpRlrzMUtqY-G9gf7PyGK4k';
export const loginIn = (email, password) => dispatch => {
    axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
        email,
        password,
        returnSecureToken: true
    }).then(response => {
        dispatch({ type: 'RESPONSE_LOGIN_SUCCESS', payload: response.data });
        dispatch(getProfile());
        dispatch(setTimeUpdate());
    }).catch(error => {
        if(error.response) {
            dispatch({ type: 'RESPONSE_LOGIN_ERROR', error: error.response.data.error });
        } else {
            dispatch({ type: 'RESPONSE_LOGIN_ERROR', error: { errors: { message: error.message } } });
        }
    })
};

export const signUp = (email, password) => dispatch => {
    axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${key}`, {
        email,
        password,
        returnSecureToken: true
    }).then(response => {
        dispatch({ type: 'RESPONSE_SIGNUP_SUCCESS', payload: response.data });
        dispatch(createProfile());
        dispatch(setTimeUpdate());
    }).catch(error => {
        if(error.response) {
            dispatch({ type: 'RESPONSE_SIGNUP_ERROR', error: error.response.data.error });
        } else {
            dispatch({ type: 'RESPONSE_SIGNUP_ERROR', error: { errors: { message: error.message } } });
        }
    });
};

export const logout = () => dispatch => {
    dispatch({ type: 'LOGOUT', state: null });
};

export const passwordChange = (password) => (dispatch, getState) => {
    const state = getState();
    const id = state.auth.localId;
    const token = state.auth.idToken;
    axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/setAccountInfo?key=${key}`, {
        idToken: token,
        password: password,
        returnSecureToken: true
    }).then(response => {
        dispatch({ type: 'RESPONSE_PASSWORD_CHANGE_SUCCESS', payload: response.data });
    }).catch(error => {
        console.table(error)
    });
};

export const updateTokens = (tokens) => {
    return { type: "UPDATE_TOKENS", payload: tokens };
};