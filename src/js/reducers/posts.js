export default function posts(state = { list: [], error: false }, action) {
    switch (action.type) {
        case 'INSERT_POST':
            return { list: state.list.concat(action.payload), error: false };
        case 'FETCH_POSTS_SUCCESS':
            return action.payload;
        case 'FETCH_POSTS_ERROR':
            return action.payload;
        default: {
            return state;
        }
    }
}