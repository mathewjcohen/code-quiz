import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div class="container">
          <div class="footer_top">CODE QUIZ</div>
          <div class="lana">
            <h3>About Lana</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit delectus fugit corporis non deleniti ipsa repellat
              laboriosam magnam! Cupiditate, nobis!
            </p>
            <p><a href="#">GitHub</a></p>
          </div>
          <div class="mat">
            <h3>About Mathew</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit delectus fugit corporis non deleniti ipsa repellat
              laboriosam magnam! Cupiditate, nobis!
            </p>
            <p>
              <a href="#">GitHub</a> | <a href="#">Twitter</a>{" "}
            </p>
          </div>
          <div class="copyright">&copy; 2017 Lana & Mathew</div>
        </div>
      </div>
    );
  }
}

export default Footer;
