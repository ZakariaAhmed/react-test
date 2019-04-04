import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import subjectsReducer from './subjectReducer';
import booksReducer from './booksReducer';

const rootReducer = (history) => combineReducers({
    router:connectRouter(history),
    subjects:subjectsReducer,
    books:booksReducer
})

export default rootReducer;


