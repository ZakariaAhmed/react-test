import React, { Component } from 'react'
import './App.css';
import { connect } from "react-redux";
import {thunk_getSubjects} from './redux/actions';
import Main from './pages/Main';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subjects:[],
      finishedLoading:false
    }

  }
  componentDidMount()
  {
    this.props.dispatch(thunk_getSubjects())
  }

  render() {
    console.log(this.props.subjects)
    return (
      <div className="App">
        <header>
          <h1>Books</h1>
        </header>
        <Main />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    subjects:state.subjects
  };
};


export default connect(mapStateToProps)(App);
