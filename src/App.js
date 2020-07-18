import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './Child1';
import Child2 from './Child2';
import PropsTypes from 'prop-types';

class App extends Component{

  state = {
    name: "Nagesh",
    age: ""
  }

  inputHandler = (event) =>{
    this.setState({age: event.target.value})

  }
  render(){
    return (
      <Fragment>
        <Child1 nme={this.state.name}/>
        <Child2 ag={this.state.age}/>
      <input type="text" onChange={this.inputHandler}></input>
      </Fragment>
    );
  }
}

App.propTypes = {
  nme: PropsTypes.string,
  ag: PropsTypes.number
}

export default App;
