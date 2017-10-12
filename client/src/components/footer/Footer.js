import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container">
          <div className="footer_top">CODE QUIZ</div>
          <div className="lana">
            <h3>About Lana</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit delectus fugit corporis non deleniti ipsa repellat
              laboriosam magnam! Cupiditate, nobis!
            </p>
            <p><a href="https://github.com/lanac">GitHub</a></p>
          </div>
          <div className="mat">
            <h3>About Mathew</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit delectus fugit corporis non deleniti ipsa repellat
              laboriosam magnam! Cupiditate, nobis!
            </p>
            <p>
              <a href="http://www.mathewcohen.com">Website</a> | <a href="https://github.com/mathewjcohen">GitHub</a> | <a href="http://www.twitter.com/matjcohen">Twitter</a> | <a href="https://www.linkedin.com/in/mathew-cohen-9223ba5a/">LinkedIn</a>
            </p>
          </div>
          <div className="copyright">&copy; 2017 Lana & Mathew</div>
        </div>
      </div>
    );
  }
}

export default Footer;
