import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import QuizCard from './components/quizcard/Quiz';
import Footer from './components/footer/Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      qArray: [
        {
          question: "The answer to life, the universe, and everything.",
          answers: [
            "42, obviously.",
            "That isn't a question.",
            "That isn't a CODING question...",
            "Who are you and why are you in my house!?"
          ],
          answer: "42, obviously."
        }
      ]
    };

  }

  render() {
    return (
      <div>
        <Header />
        <div id="quiz_wrap">
          <QuizCard item={this.state.qArray[0]} />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
