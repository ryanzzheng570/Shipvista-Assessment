import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import plants from './plants'

const appReducer = combineReducers({
    plants
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
