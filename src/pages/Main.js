import React, { Component } from 'react'
import { connect } from "react-redux";
import * as action from '../redux/actions';
import {Grid, Select, MenuItem} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import BooksTable from '../components/BooksTable';
import Paper from '@material-ui/core/Paper'


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  }
});

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject: ''
    }
  }

  componentDidMount() {
    
  }

  handleChange = event => {
    this.setState({ subject: event.target.value });
    
    console.log(event.target.value);

    this.props.getBooksBySubject(event.target.value);
  };

  render() {
    const subjects = this.props.subjectData.subjects
    const books = this.props.booksData.books
    const subjectData = subjects.map((subject, key) => <MenuItem value={subject} key={key}>{subject}</MenuItem>)
    const { classes } = this.props;
    return (
      <div>
        <form>
        <Grid container spacing={8} alignItems="flex-end">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="subject-helper">Select subject</InputLabel>
          <Select
            value={this.state.subject}
            onChange={this.handleChange}
            input={<Input name="subject" id="subject-helper" />}
          >
           {subjectData}
          </Select>
        </FormControl>
        </Grid>
       </form>
       <Paper>
       <BooksTable books={books} fetched={this.props.booksData.fetched} />
       </Paper>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
      sendTheAlert: () => {dispatch(action.fetchingSubjects())},
      getBooksBySubject: (subject) => {dispatch(action.thunk_getBookBySubject(subject))}
    }
}

const mapStateToProps = state => {
  return {
    subjectData:state.subjects,
    booksData:state.books
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main));
