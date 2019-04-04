import {getAllSubjects, getBooksBySubject} from '../../bookApi';

/*
 * action types
 */

export const ADD_SUBJECT = 'ADD_SUBJECT'
export const FETCHING_SUBJECTS = 'FETCHING_SUBJECTS'
export const SUBJECTS_FETCHED = 'SUBJECTS_FETCHED'

export const FETCHING_BOOKS_BY_SUBJECT =  'FETCHING_BOOKS_BY_SUBJECT'
export const BOOKS_BY_SUBJECT_FETCHED = 'BOOKS_BY_SUBJECT_FETCHED'

/*
 * action creators
 */


export const fetchingSubjects = () => {
    return {
      type: FETCHING_SUBJECTS
    }
} 

export const subjectsFetched = subjects => {
  return {
    type:SUBJECTS_FETCHED,
    subjects
  }
}

export const fetchingBooksBySubject = () => {
  return {
    type: FETCHING_BOOKS_BY_SUBJECT
  }
}

export const booksBySubjectFetched = books => {
  return {
    type:BOOKS_BY_SUBJECT_FETCHED,
    books
  }
}


/*
Thunk action creator
*/
export const thunk_getSubjects = () => {
  
  return (dispatch) => {
    
    dispatch(fetchingSubjects())
    
    return getAllSubjects().then(data => dispatch(subjectsFetched(data)))
  }
}

export const thunk_getBookBySubject = (subject) => {
    return (dispatch) => {
      
      dispatch(fetchingBooksBySubject());

      return getBooksBySubject(subject).then(data => dispatch(booksBySubjectFetched(data)))
    }
}
