import React, { Component } from "react";
import "./Quiz.css";

class QPop extends Component {
  
  render() {
    return (
      <div className="answer_pop_wrap">
        <div className="answer_pop">
          <p>You answered {this.props.result}!</p>
          <a onClick={this.props.closeWindow} className="btn">
            close
          </a>
        </div>
      </div>
    );
  }
}

export default QPop;
