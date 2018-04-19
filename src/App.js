import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div id="topNav" className="container-fluid bg-primary">
          <h1 className="text-white">Top Nav</h1>
        </div>
        <div id="mainBody" className="container bg-secondary">
          <h1 className="text-white">Main Body</h1>
        </div>

        <div id="list" className="container-fluid bg-success">
          <h1 className="text-dark">List</h1>
        </div>
        <div id="footer" className="container bg-dark">
          <h1 className="text-white">Footer</h1>
        </div>
      </div>
    );
  }
}

export default App;
