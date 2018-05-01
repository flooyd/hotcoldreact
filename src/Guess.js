import React, {Component} from 'react';

/* export default class Guess extends Component{
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.handleGuess(this.input.value);
  }

  render() {
    return (
      <div>
        <form type="submit" onSubmit={e => this.onSubmit(e)}>
          <input ref={(input) => this.input = input} type="number" placeholder="Enter guess here"/>
          <p>Guess #{this.props.guessNum}</p>
          <button>Guess!</button>
        </form>
      </div>
    )
  }
} */

export default function Guest(props) {
  let input;

  const onSubmit = e => {
    e.preventDefault();
    props.handleGuess(input.value);
  }
  
  return(
    <div>
      <form type="submit" onSubmit={e => onSubmit(e)}>
        <input ref={i => input = i} type="number" placeholder="Enter guess here"/>
        <p>Guess #{props.guessNum}</p>
        <button>Guess!</button>
      </form>
    </div>
  )
}