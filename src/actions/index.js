export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
    type: ADD_GUESS,
    guess
});

export const SET_HINT = 'SET_HINT';
export const setHint = hint => ({
  type: SET_HINT,
  hint
});

export const INCREMENT_CURRENT_GUESS = 'INCREMENT_CURRENT_GUESS';
export const incrementCurrentGuess = () => ({
  type: INCREMENT_CURRENT_GUESS
});

export const SET_CORRECT_NUM = 'SET_CORRECT_NUM';
export const setCorrectNum = () => ({
  type: SET_CORRECT_NUM
});

export const SET_GAME_OVER = 'SET_GAME_OVER';
export const setGameOver = gameOver => ({
  type: SET_GAME_OVER,
  gameOver
})

export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () => ({
  type: START_NEW_GAME
});
