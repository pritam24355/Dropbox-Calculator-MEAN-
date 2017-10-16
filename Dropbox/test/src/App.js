import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {withRouter} from 'react-router-dom';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  componentWillMount() {
      fetch("http://localhost:3001/checkLogin", {
          mode: 'cors',
          credentials: 'include'
      }).then((response) => {
          
      }).catch((err) => {
          this.props.history.push("/signIn");
      });
  }

  render() {
    if(!this.state.loggedIn) {
      return (<div></div>);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withRouter(App);
