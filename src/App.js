import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import Home from './home';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  // render() {
  //   return (
  //     <Router history={browserHistory}>
  //       <Route path="/" component={Feed}/>
  //       <Route path="/profile" component={Profile}/>
  //     </Router>
  //   );
  // }
  render = () => (
    <div className="App">
        <Home></Home>
    </div>
  )
}

export default App
