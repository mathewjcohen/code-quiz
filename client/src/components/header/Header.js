import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div class="container">
          <span id="brand_logo"><a href='/'>CODE QUIZ</a></span>
          <div id="category_select">
            <select>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
              <option>Category 4</option>
            </select>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
