import axios from "axios";
import { updateTokens } from './auth.js';
const key = 'AIzaSyBEmZPZacwxXpRlrzMUtqY-G9gf7PyGK4k';
export const setTimeUpdate = () => (dispatch, getState) => {
    const token = getState().token;
    if(token === null) {
        let expireSeconds = 3600;
        const expiresDate = new Date();
        expiresDate.setSeconds(expiresDate.getSeconds() + expireSeconds);
        dispatch({ type: "SET_EXPIRE_TIME", date: expiresDate.getTime() });
    }
    let tokenTimer = setTimeout(function timer() {
        if(getState().token != null) {
            let expireSeconds = new Date().getSeconds();
            const expiresDate = new Date(getState().token);
            const currentDate = new Date();
            expireSeconds = (expiresDate.getTime() - currentDate.getTime()) / 1000;
            if(expireSeconds > 60) {
                tokenTimer = setTimeout(timer, 1000);
            } else {
                axios.post(`https://securetoken.googleapis.com/v1/token?key=${key}`, {
                    grant_type: 'refresh_token',
                    refresh_token: getState().auth.refreshToken
                }).then(response => {
                    const tokens = {
                        idToken: response.data.id_token,
                        refreshToken: response.data.refresh_token
                    };
                    const newDate = new Date();
                    newDate.setSeconds(newDate.getSeconds() + 3600);
                    dispatch({ type: "SET_EXPIRE_TIME", date: newDate.getTime() });
                    dispatch(updateTokens(tokens));
                    tokenTimer = setTimeout(timer, 1000);
                }).catch(error => {
                    console.table(error);
                })
            }
        }
    });
};