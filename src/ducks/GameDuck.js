import { Map, List } from 'immutable';

const emptyRow = List([null, null, null, null, null, null, null, null]);

const INITIAL_STATE = Map({
  board: Map({
    a: emptyRow,
    b: emptyRow,
    c: emptyRow,
    d: emptyRow,
    e: emptyRow,
    f: emptyRow,
    g: emptyRow,
    h: emptyRow,
  }),
});

const UPDATE_BOARD = 'UPDATE_BOARD';

export const updateBoard = () => ({ type: UPDATE_BOARD });

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_BOARD:
      return state.setIn(['board', 'a', 0], 999);
    default:
      return state;
  }
};
