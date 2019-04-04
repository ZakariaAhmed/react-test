import React, { Component } from 'react'
import { connect } from "react-redux";
import * as action from '../redux/actions';
import {Grid} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl'
import withStyles from '@material-ui/core/styles/withStyles';
import BooksTable from '../components/BooksTable';
import Paper from '@material-ui/core/Paper'
import SubjectMenu from '../components/SubjectMenu';


const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
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

  handleChange = event => {
    this.setState({ subject: event.target.value });
  
    this.props.getBooksBySubject(event.target.value);
  };

  render() {
    const books = this.props.booksData.books
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.form}>
        <Grid container spacing={8} alignItems="flex-end">
        <FormControl className={classes.formControl}>
          <SubjectMenu subjects={this.props.subjectData.subjects} value={this.state.subject} onChange={this.handleChange} fetched={this.props.subjectData.fetched} />
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
