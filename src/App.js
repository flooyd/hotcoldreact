import React, { Component } from 'react';
import HighLow from './HighLow';
import Guess from './Guess';
import Guesses from './Guesses'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      hint: 'Make your Guess',
      currentGuess: 1,
      correctNum: Math.floor(Math.random() * 101),
      gameOver: false
    };
  }

  handleGuess(guess) {
    let guesses = this.state.guesses;
    let currentGuess = this.state.currentGuess + 1;
    guesses.push(guess);
    let hint = '';
    let gameOver = false;

    if(guess > this.state.correctNum) {
      hint = 'Too High!';
    } else if (guess < this.state.correctNum) {
      hint = 'Too Low!';
    } else {
      hint = 'Perfect! You win :D';
      gameOver = true;
    }

    this.setState({
      hint,
      gameOver,
      currentGuess
    });

  }

  newGame() {
    this.setState({
      guesses: [],
      hint: 'Make your Guess',
      currentGuess: 1,
      correctNum: Math.floor(Math.random() * 101),
      gameOver: false
    });
  }

  render() {
    console.log(this.state.correctNum)
    if (this.state.gameOver) {
      return (
        <section className="app">
        <div>
          <button onClick={() => this.newGame()}>New Game</button>
          <h1 style={{textAlign: 'center'}}>High or Low</h1>
          <HighLow highlow={this.state.hint}/>
        </div>
        </section>
      )
    } else {
      return (
        <section className="app">
          <div>
            <h1 style={{textAlign: 'center'}}>High or Low</h1>
            <HighLow highlow={this.state.hint}/>
            <Guess guessNum={this.state.currentGuess} handleGuess={guess => this.handleGuess(guess)}/>
            <Guesses guesses={this.state.guesses}/>
          </div>
        </section>
      );
    }
    
  }
}

export default App;