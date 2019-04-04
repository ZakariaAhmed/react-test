import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import LoadingCircle from './LoadingCircle';
import Input from '@material-ui/core/Input';
import  InputLabel  from '@material-ui/core/InputLabel';

const SubjectMenu = ({subjects, fetched, value, onChange}) => {

    const subjectData = subjects.map((subject, key) => <MenuItem value={subject} key={key}>{subject}</MenuItem>)
    const subjectMenu = fetched ? <React.Fragment><InputLabel htmlFor="subject-helper">Select subject</InputLabel><Select value={value} onChange={onChange} input={<Input name="subject" id="subject-helper" />}>{subjectData}</Select></React.Fragment>: <LoadingCircle />
    return (
    <div>
      {subjectMenu}
    </div>
  )
}

SubjectMenu.propTypes = {
    subjects:PropTypes.array,
    fetched:PropTypes.bool,
    value:PropTypes.string,
    onChange:PropTypes.func,
}

export default SubjectMenu;
