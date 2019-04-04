import {FETCHING_BOOKS_BY_SUBJECT, BOOKS_BY_SUBJECT_FETCHED} from '../actions';


const initialState = {
    books:[],
    isFetching:false,
    fetched:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_BOOKS_BY_SUBJECT: {
            return {...state, fetched: false, isFetching: true}
        }
        case BOOKS_BY_SUBJECT_FETCHED: {
            return {...state, books:action.books, fetched: true, isFetching: false}
        }
        default: return state
    }
}

