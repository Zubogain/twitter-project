import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers/index.js';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;