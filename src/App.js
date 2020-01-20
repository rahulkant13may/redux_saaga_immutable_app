import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

function App(props) {
  console.log("props", props)
  return (
    <div className="App">

    <span> {props.age} </span>
    <button onClick={props.onAgeUp}> Age Up </button>
      <button onClick={props.onAgeDown}> Age Down </button>



    </div>
  );
}

const mapStateToProps = state => {
  // console.log("mapstatetoprops", state.getIn(["data", "potentially", "deep", "age"]))
  return {
    age: state.getIn(["data", "potentially", "deep", "age"])
    // age: state.data.potentially.deep.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1})

  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
