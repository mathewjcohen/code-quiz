import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Quiz.css";

const QuizCard = ({ question }) => {
  if (!question) {
    return (
      <div class="card_wrap">
        <div class="card_title">Loading...</div>
        <div class="card_body">&nbsp;</div>
      </div>
    );
  }

  return (
    <div>
      <div class="card_wrap">
        <div class="card_title">{question.question}</div>
        <div class="card_body">
          <div class="choice_wrap">
            <input type="radio" name="quiz" value="" /> {question.answers[0]}
          </div>
          <div class="choice_wrap">
            <input type="radio" name="quiz" value="" /> {question.answers[1]}
          </div>
          <div class="choice_wrap">
            <input type="radio" name="quiz" value="" /> {question.answers[2]}
          </div>
          <div class="choice_wrap">
            <input type="radio" name="quiz" value="" /> {question.answers[3]}
          </div>
        </div>
      </div>
      <div class="quiz_submit">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default QuizCard;
