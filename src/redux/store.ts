import {createStore, applyMiddleware, compose} from 'redux';
import {thunk} from 'redux-thunk';
import CardReducer from './reducer';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(CardReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
