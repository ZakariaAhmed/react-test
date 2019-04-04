import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import LoadingCircle from './LoadingCircle';
import { withStyles } from '@material-ui/core/styles';

const SubjectMenu = ({subjects, isFetching, fetched, value, selectSubject, onChange}) => {

    const subjectData = subjects.map((subject, key) => <MenuItem onClick={selectSubject} value={subject} key={key}>{subject}</MenuItem>)
    const subjectMenu = fetched ? <Select autoWidth={true} value={value} onChange={onChange}>{subjectData}</Select> : <LoadingCircle />
    return (
    <div>
      {subjectMenu}
    </div>
  )
}

SubjectMenu.propTypes = {
    subjects:PropTypes.array,
    isFetching:PropTypes.bool,
    fetched:PropTypes.bool,
    MenuOnClick:PropTypes.func,
    value:PropTypes.string,
    onChange:PropTypes.func,
    selectSubject:PropTypes.func
}

export default SubjectMenu;
