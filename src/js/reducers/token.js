export default function token(state = null, action) {
    switch (action.type) {
        case 'EXPIRED_DATE':
            return action.state;
        case 'CLEAR_DATE':
            return action.state;
        default:
            return state;
    }
}