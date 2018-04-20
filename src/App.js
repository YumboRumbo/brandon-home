import React, { Component } from 'react';
import logo from './logo.svg';
import TopNav from './components/topNav';
import MainBody from './components/mainBody';
import List from './components/list';
import Footer from './components/footer';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <TopNav />
        <MainBody />
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
