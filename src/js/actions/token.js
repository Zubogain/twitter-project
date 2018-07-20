import { logout, updateTokens } from './auth.js';
import { clearProfile } from './profile.js';
import axios from 'axios';
const key = 'AIzaSyBEmZPZacwxXpRlrzMUtqY-G9gf7PyGK4k';
export const setTimeUpdate = () => (dispatch, getState) => {
    let timerId = setTimeout(function timer(go = false) {
        let state = getState();
        let expiredDate = new Date();
        if(state.token === null && !go) {
            expiredDate.setTime(expiredDate.getTime() + (state.auth.expiresIn * 1000));
            dispatch({ type: "EXPIRED_DATE", state: expiredDate.getTime() });
            timerId = setTimeout(timer.bind(this, true), 1000);
        } else {
            let secondsLeft = (state.token - expiredDate.getTime()) / 1000;
            if(secondsLeft < 4) {
                axios.post(`https://securetoken.googleapis.com/v1/token?key=${key}`, {
                    refresh_token: state.auth.refreshToken,
                    grant_type: 'refresh_token'
                }).then(response => {
                    const dataWrap = {
                        idToken: response.data.id_token,
                        refreshToken: response.data.refresh_token
                    };
                    dispatch(updateTokens(dataWrap));
                    dispatch({ type: "CLEAR_DATE", state: null });
                    timerId = setTimeout(timer);
                }).catch(error => {
                    console.log('Ошибка обновления токена!');
                    dispatch(logout());
                    dispatch(clearProfile());
                    dispatch({ type: "CLEAR_DATE", state: null });
                });
            } else {
                timerId = setTimeout(timer, (secondsLeft - 4) * 1000);
            }
        }
    });
};