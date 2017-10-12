import React, { Component } from "react";
import "./Quiz.css";
import Right from './Right';
import Wrong from './Wrong';

class QuizCard extends Component {
  constructor(props) {
    super(props);

    this.state = { right: false, wrong: false };

    this.question = this.props.item;
  }

  clicked(userAnswer){
    if(userAnswer === this.question.answer){
      alert("You answered correct!")
      this.setState({right : true})
    }else{
      alert("Nope. You got it wrong.")
      this.setState({wrong : true})
    }
  }

  render() {
    return (
      <div>
        <div className="card_wrap">
          <div className="card_title">{this.question.question}</div>
          <div className="card_body">
            <div className="choice_wrap">
              <button onClick={ () => { this.clicked(this.question.answers[0]) } } className="choice">
                {this.question.answers[0]}
              </button>
            </div>
            <div className="choice_wrap">
              <button onClick={ () => { this.clicked(this.question.answers[1]) } } className="choice">
                {this.question.answers[1]}
              </button>
            </div>
            <div className="choice_wrap">
              <button onClick={ () => { this.clicked(this.question.answers[2]) } } className="choice">
                {this.question.answers[2]}
              </button>
            </div>
            <div className="choice_wrap">
              <button onClick={ () => { this.clicked(this.question.answers[3]) } } className="choice">
                {this.question.answers[3]}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizCard;
