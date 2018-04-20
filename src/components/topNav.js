import React, { Component } from 'react';
import '../styles/index.css';

class TopNav extends Component {
  render() {
    return (
      <div id="topNav" className="container-fluid bg-primary">
        <div className="container-fluid">
          <div className="row">
            <div id="homeButton" className="col-3 border">
              Home
            </div>
            <div id="menuContainer" className="col-6 border">
              <div id="menuRow" className="row">
                <div className="col">Pages</div>
                <div className="col">Pages</div>
                <div className="col">Pages</div>
                <div className="col">Pages</div>
                <div className="col">Pages</div>
                <div className="col">Pages</div>
                <div className="col">Pages</div>
              </div>
            </div>

            <div id="hamburgerContainer" className="col-3 border d-flex">
              <div id="hamburger" className="ml-auto">
                Hamburger
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
