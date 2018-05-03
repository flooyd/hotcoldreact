import {
  ADD_GUESS,
  SET_HINT,
  INCREMENT_CURRENT_GUESS,
  SET_CORRECT_NUM,
  SET_GAME_OVER,
  START_NEW_GAME
} from '../actions';

const initialState = {
  guesses: [],
  hint: 'Make your Guess',
  currentGuess: 1,
  correctNum: Math.floor(Math.random() * 101),
  gameOver: false
};

export const hotColdReducer = (state=initialState, action) => {
    if (action.type === ADD_GUESS) {
        return Object.assign({}, state, {
          guesses: [...state.guesses, action.guess]
        });
    }
    else if (action.type === SET_HINT) {
        return Object.assign({}, state, {
          hint: action.hint
        });
    }
    else if (action.type === INCREMENT_CURRENT_GUESS) {
        return Object.assign({}, state, {
          currentGuess: state.currentGuess + 1
        });
    }
    else if (action.type === SET_CORRECT_NUM) {
      return Object.assign({}, state, {
        correctNum: Math.floor(Math.random() * 101)
      })
    }
    else if (action.type === SET_GAME_OVER) {
      return Object.assign({}, state, {
        gameOver: action.gameOver
      })
    }
    else if (action.type === START_NEW_GAME) {
      return Object.assign({}, state, initialState);
    }
    return state;
};

