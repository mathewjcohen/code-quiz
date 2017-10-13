import React, { Component } from "react";
import "./Quiz.css";
import QPop from './QPop';

class QuizCard extends Component {
  constructor(props) {
    super(props);

    this.currentItem = 0;
    this.itemNum = () => {
      if(this.currentItem === this.props.items.length - 1){
        this.currentItem = 0;
      }else{
        this.currentItem++;
      }
    }

    this.state = { 
      result: "", 
      hideQPop: true,
      question: this.props.items[this.currentItem]
    }
  }

  clicked(userAnswer) {
    if (userAnswer === this.state.question.answer) {
      this.setState({result: "correct"})
    } else {
      this.setState({result: "incorrect"})
    }
    this.itemNum()
    this.setState({
      hideQPop: false, 
      question: this.props.items[this.currentItem]
    })
  }
  
  handleCloseWindow(){
    this.setState({result: "", hideQPop: true})
  }

  render() {
    return (
      <div>
        <div className="card_wrap">
          <div className="card_title">{this.state.question.question}</div>
          <div className="card_body">
            <div className="choice_wrap">
              <button onClick={() => { this.clicked(this.state.question.answers[0]); }} className="choice waves-effect waves-light btn-large deep-orange lighten-1 text-white">
                {this.state.question.answers[0]}
              </button>
            </div>
            <div className="choice_wrap">
              <button onClick={() => { this.clicked(this.state.question.answers[1]); }} className="choice waves-effect waves-light btn-large deep-orange lighten-1 text-white">
                {this.state.question.answers[1]}
              </button>
            </div>
            <div className="choice_wrap">
              <button onClick={() => { this.clicked(this.state.question.answers[2]); }} className="choice waves-effect waves-light btn-large deep-orange lighten-1 text-white">
                {this.state.question.answers[2]}
              </button>
            </div>
            <div className="choice_wrap">
              <button onClick={() => { this.clicked(this.state.question.answers[3]); }} className="choice waves-effect waves-light btn-large deep-orange lighten-1 text-white">
                {this.state.question.answers[3]}
              </button>
            </div>
          </div>
        </div>
        {!this.state.hideQPop && <QPop result={this.state.result} closeWindow={this.handleCloseWindow.bind(this)} />}
      </div>
    );
  }
}

export default QuizCard;
