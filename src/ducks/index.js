import { combineReducers } from 'redux-immutable';
import mainReducer from 'Ducks/MainDuck';

const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;
