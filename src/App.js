import React, { Component } from 'react';
import HighLow from './HighLow';
import Guess from './Guess';
import Guesses from './Guesses'
import {connect} from 'react-redux';
import './App.css';

import {
  addGuess,
  setHint,
  incrementCurrentGuess,
  setGameOver,
  startNewGame
} from './actions';

class App extends Component {
  handleGuess(guess) {
    let hint = this.props.hint;
    let gameOver = this.props.gameOver;

    if(guess > this.props.correctNum) {
      hint = 'Too High!';
    } else if (guess < this.props.correctNum) {
      hint = 'Too Low!';
    } else {
      hint = 'Perfect! You win :D';
      gameOver = true;
    }

    this.props.dispatch(addGuess(guess));
    this.props.dispatch(incrementCurrentGuess());
    this.props.dispatch(setHint(hint));
    this.props.dispatch(setGameOver(gameOver));

  }

  render() {
    console.log(this.props.correctNum)
    if (this.props.gameOver) {
      return (
        <section className="app">
        <div>
          <button onClick={() => this.props.dispatch(startNewGame())}>New Game</button>
          <h1 style={{textAlign: 'center'}}>High or Low</h1>
          <HighLow highlow={this.props.hint}/>
        </div>
        </section>
      )
    } else {
      return (
        <section className="app">
          <div>
            <h1 style={{textAlign: 'center'}}>High or Low</h1>
            <HighLow highlow={this.props.hint}/>
            <Guess guessNum={this.props.currentGuess} handleGuess={guess => this.handleGuess(guess)}/>
            <Guesses guesses={this.props.guesses}/>
          </div>
        </section>
      );
    }
    
  }
}

export const mapStateToProps = state => ({
    guesses: state.guesses,
    gameOver: state.gameOver,
    currentGuess: state.currentGuess,
    correctNum: state.correctNum,
    hint: state.hint
});

export default connect(mapStateToProps)(App);