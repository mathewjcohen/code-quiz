import React, { Component } from "react";
import "./Quiz.css";
import Right from './Right';
import Wrong from './Wrong';

class QuizCard extends Component {
  constructor(props) {
    super(props);

    this.state = { hideWrong: true, hideRight: true };

    this.question = this.props.item;
    
  }

  clicked(userAnswer) {
    if (userAnswer === this.question.answer) {
      this.setState({hideRight: false})
    } else {
      this.setState({hideWrong: false})
    }
  }
  
  handleCloseWindow(){
    this.setState({hideRight: true, hideWrong: true})
  }

  render() {
    return (
      <div>
        <div className="card_wrap">
          <div className="card_title">{this.question.question}</div>
          <div className="card_body">
            <div className="choice_wrap">
              <button onClick={() => { this.clicked(this.question.answers[0]); }} className="choice waves-effect waves-light btn-large deep-orange lighten-1 text-white">
                {this.question.answers[0]}
              </button>
            </div>
            <div className="choice_wrap">
              <button onClick={() => { this.clicked(this.question.answers[1]); }} className="choice waves-effect waves-light btn-large deep-orange lighten-1 text-white">
                {this.question.answers[1]}
              </button>
            </div>
            <div className="choice_wrap">
              <button onClick={() => { this.clicked(this.question.answers[2]); }} className="choice waves-effect waves-light btn-large deep-orange lighten-1 text-white">
                {this.question.answers[2]}
              </button>
            </div>
            <div className="choice_wrap">
              <button onClick={() => { this.clicked(this.question.answers[3]); }} className="choice waves-effect waves-light btn-large deep-orange lighten-1 text-white">
                {this.question.answers[3]}
              </button>
            </div>
          </div>
        </div>
        {!this.state.hideRight && <Right />}
        {!this.state.hideWrong && <Wrong closeWindow={this.handleCloseWindow} />}
      </div>
    );
  }
}

export default QuizCard;
