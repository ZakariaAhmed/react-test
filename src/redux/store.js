import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import rootReducer from './reducers';
import { routerMiddleware } from 'connected-react-router'
import thunk from "redux-thunk";

export const history = createBrowserHistory()

//import {thunk_getSubjects} from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer(history), composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))));



//store.dispatch(getSubjects())


console.log(store.getState());