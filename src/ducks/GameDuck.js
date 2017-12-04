import { Map, OrderedMap, List } from 'immutable';

import { Chess } from 'Chess/game';

const emptyColumn = List([null, null, null, null, null, null, null, null]);

const INITIAL_STATE = Map({
  board: OrderedMap({
    a: emptyColumn,
    b: emptyColumn,
    c: emptyColumn,
    d: emptyColumn,
    e: emptyColumn,
    f: emptyColumn,
    g: emptyColumn,
    h: emptyColumn,
  }),
  selected: Map({ column: null, row: null }),
});

const INITIALIZE_BOARD = 'INITIALIZE_BOARD';
const CLICK_BOARD = 'CLICK_BOARD';

export const initializeBoard = () => {
  const board = Chess.initialize();
  console.log('board', board);
  return {
    type: INITIALIZE_BOARD,
    payload: board,
  };
};

export const clickBoard = (column, row) => {
  console.log('column', column);
  return {
    type: CLICK_BOARD,
    payload: Map({ column, row }),
  };
};

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIALIZE_BOARD:
      return state.set('board', action.payload);
    case CLICK_BOARD:
      return state.set('selected', action.payload);
    default:
      return state;
  }
};

export const getHighlighted = (state) => {
  console.log('state', state);
  const column = state.getIn(['game', 'selected', 'column']);
  const row = state.getIn(['game', 'selected', 'row']);
  const board = state.get('game', 'board');
  console.log('row', row, 'column', column);
  console.log(column && (row || row === 0));
  return (column && (row || row === 0)) ? Chess.getMoves(board, column, row) : List();
};
