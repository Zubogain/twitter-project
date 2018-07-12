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
        dispatch({ type: 'RESPONSE_LOGIN_ERROR', error: error.response.data.error });
    })
};

// Почитать: как шифруется пароль и дописать методы входа и регистрации
export const signUp = (email, password) => dispatch => {
    axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${key}`, {
        email,
        password,
        returnSecureToken: true
    }).then(response => {
        dispatch({ type: 'RESPONSE_SIGNUP_SUCCESS', payload: response.data });
    }).catch(error => {
        dispatch({ type: 'RESPONSE_SIGNUP_ERROR', error: error.response.data.error });
    });
};

export const logout = () => dispatch => {
    dispatch({ type: 'LOGOUT', state: null });
};