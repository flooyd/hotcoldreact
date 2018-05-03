import React from 'react';

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