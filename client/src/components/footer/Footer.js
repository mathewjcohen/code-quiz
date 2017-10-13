import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container">
          <div className="footer_top">CODE QUIZ</div>
          <div className="footer_flex">
            <div className="lana">
              <h5>About Lana</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit delectus fugit corporis non deleniti ipsa repellat
                laboriosam magnam! Cupiditate, nobis!
              </p>
              <p>
                <a href="https://github.com/lanac" target="_blank"  rel="noopener noreferrer">GitHub</a>
              </p>
            </div>
            <div className="mat">
              <h5>About Mathew</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit delectus fugit corporis non deleniti ipsa repellat
                laboriosam magnam! Cupiditate, nobis!
              </p>
              <p>
                <a href="http://www.mathewcohen.com" target="_blank" rel="noopener noreferrer">Website</a>| 
                <a href="https://github.com/mathewjcohen" target="_blank"  rel="noopener noreferrer">GitHub</a>| 
                <a href="http://www.twitter.com/matjcohen" target="_blank"  rel="noopener noreferrer">Twitter</a>| 
                <a href="https://www.linkedin.com/in/mathew-cohen-9223ba5a/" target="_blank"  rel="noopener noreferrer">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>

          <div className="copyright">&copy; 2017 Lana & Mathew</div>
        </div>
      </div>
    );
  }
}

export default Footer;
