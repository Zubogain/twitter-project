export default function posts(state = [], action) {
    switch (action.type) {
        case 'INSERT_POST':
            return state.concat(action.payload);
        default: {
            return state;
        }
    }
}