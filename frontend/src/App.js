import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/home';

import './App.css';

class App extends Component {
  componentDidMount() {
    document.title = "Personal Equipment";
  }
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default App;
