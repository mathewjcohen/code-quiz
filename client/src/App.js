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
        },
        {
          question: "How many licks does it take to get to the center of a tootsie pop?",
          answers: [
            "One",
            "Three",
            "Ten",
            "Like, a billion."
          ],
          answer: "Three"
        },
        {
          question: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
          answers: [
            "About 350lbs.",
            "What?",
            "350 of them.",
            "About 700lbs."
          ],
          answer: "About 700lbs."
        }
      ]
    };

  }

  render() {
    return (
      <div>
        <Header />
        <div id="quiz_wrap">
          <QuizCard items={this.state.qArray} />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
