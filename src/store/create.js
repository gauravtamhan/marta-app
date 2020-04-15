import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import reducer from './reducer';

const middleWare = [thunk];

if (__DEV__) {
    middleWare.push(logger);
}

const enhancer = compose(
    applyMiddleware(
        ...middleWare,
    ),
);

const rootReducer = combineReducers({ reducer });

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    enhancer
);

export default store;