export default function profile(state = null, action) {
    switch (action.type) {
        case 'RESPONSE_PROFILE_SUCCESS':
            return action.payload;
        case 'NOT_AUTH':
            return action.payload;
        case 'CLEAR_PROFILE':
            return action.payload;
        case 'RESPONSE_CREATE_PROFILE_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}