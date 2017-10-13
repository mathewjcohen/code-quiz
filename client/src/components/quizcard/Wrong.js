import React, { Component } from "react";
import "./Quiz.css";

class Wrong extends Component {
  constructor(props){
    super(props);

    this.temp = "";
  }

  closeWindow = () => {
    this.props.handleCloseWindow();
  }

  render() {
    return (
      <div className="answer_pop_wrap">
        <div className="answer_pop">
          <p>You answered wrong!</p>
          <a onClick={this.closeWindow} className="btn">
            close
          </a>
        </div>
      </div>
    );
  }
}

export default Wrong;