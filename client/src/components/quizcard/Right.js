import React, { Component } from "react";
import "./Quiz.css";

class Right extends Component {

  render() {
    return (
      <div className="answer_pop_wrap">
        <div className="answer_pop">
          <p>You answered right!</p>
          <a href="/" className="btn">
            close
          </a>
        </div>
      </div>
    );
  }
}

export default Right;
