import {FETCHING_SUBJECTS, SUBJECTS_FETCHED} from '../actions';


const initialState = {
    subjects:[],
    isFetching:false,
    fetched:false,
    selectedValue:'',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SUBJECTS: {
            return {...state, fetched: false, isFetching: true}
        }
        case SUBJECTS_FETCHED: {
            return {...state, subjects:action.subjects, fetched: true, isFetching: false}
        }
        default: return state
    }
}
