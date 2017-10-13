import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <a className="brand-logo" href="/">
              CODE QUIZ
            </a>
            <a className="right dropdown-button transparent" data-activates="dropdown1">
              Choose a Category <i className="fa fa-caret-down" aria-hidden="true"></i>
            </a>
            <ul id="dropdown1" className="dropdown-content">
              <li>
                <a href="/">Category 1</a>
              </li>
              <li>
                <a href="/">Category 2</a>
              </li>
              <li>
                <a href="/">Category 3</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
