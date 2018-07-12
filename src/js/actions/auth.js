import axios from 'axios';

const key = 'AIzaSyBEmZPZacwxXpRlrzMUtqY-G9gf7PyGK4k';

export const loginIn = (email, password) => dispatch => {
    axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
        email,
        password,
        returnSecureToken: true
    }).then(response => {
        dispatch({ type: 'RESPONSE_LOGIN_SUCCESS', payload: response.data });
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