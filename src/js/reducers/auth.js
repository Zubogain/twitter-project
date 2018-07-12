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
        default:
            return state;
    }
}