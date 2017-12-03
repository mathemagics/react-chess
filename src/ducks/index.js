import { combineReducers } from 'redux-immutable';
import { mainReducer } from 'Ducks/MainDuck';
import { gameReducer } from 'Ducks/GameDuck';

const rootReducer = combineReducers({
  main: mainReducer,
  game: gameReducer,
});

export default rootReducer;
