import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import reducer from './reducer';

const middleWare = [thunk];

if (process.env.NODE_ENV !== 'production') {
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