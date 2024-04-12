import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import CardReducer from './reducer';

const store = createStore(CardReducer, applyMiddleware(thunk))
export default store;
