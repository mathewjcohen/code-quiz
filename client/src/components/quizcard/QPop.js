import React, { Component } from "react";
import "./Quiz.css";

class QPop extends Component {
  constructor(props){
    super(props);

    if(this.props.result === "incorrect"){
      this.btnTxt = "Doh!"
    }else{
      this.btnTxt = "Awesome!"
    }
  }

  render() {
    return (
      <div className="answer_pop_wrap">
        <div className="answer_pop">
          <p>You answered {this.props.result}!</p>
          <a onClick={this.props.closeWindow} className="btn">
            {this.btnTxt}
          </a>
        </div>
      </div>
    );
  }
}

export default QPop;
