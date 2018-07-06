const initialState = {
    posts: []
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return action.payload;
        case 'FETCH_POSTS_ERROR':
            return action.payload;
        case 'LOAD_LOCALSTORAGE':
            return action.payload;
        case 'INSERT_POST':
            return state.concat(action.payload);
        default:
            return state;
    }
}