import React, {Component} from 'react';

export default function Guesses(props) {
  function getGuesses() {
    const guesses = props.guesses.map((guess, index) => {
      return <p key={index}>{guess}</p>
    });

    return guesses;
  }
  return (
    <div>
       {getGuesses()}
    </div>
  )
}