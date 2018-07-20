export default function login(state = null, action) {
    switch (action.type) {
        case 'RESPONSE_LOGIN_SUCCESS':
            return action.payload;
        case 'RESPONSE_LOGIN_ERROR':
            return action.error;
        case'RESPONSE_SIGNUP_SUCCESS':
            return action.payload;
        case 'RESPONSE_SIGNUP_ERROR':
            return action.error;
        case 'LOGOUT':
            return action.state;
        case 'RESPONSE_PASSWORD_CHANGE_SUCCESS':
            return Object.assign(state, action.payload);
        case 'UPDATE_TOKENS':
            return Object.assign(state, action.payload);
        default:
            return state;
    }
}