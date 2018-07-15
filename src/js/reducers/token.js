export default function token(state = null, action) {
    switch (action.type) {
        case 'SET_EXPIRE_TIME':
            return action.date;
        case 'LOGOUT':
            return action.state;
        default:
            return state;
    }
}