import { OrderedMap, List } from 'immutable';
import { knight } from './pieces/knight';


const defaultLayout = OrderedMap({
  a: List(['rook', 'pawn', null, null, null, null, 'pawn', 'rook']),
  b: List([knight, 'pawn', null, null, null, null, 'pawn', 'knight']),
  c: List(['bishop', 'pawn', null, null, null, null, 'pawn', 'bishop']),
  d: List(['queen', 'pawn', null, null, null, null, 'pawn', 'queen']),
  e: List(['king', 'pawn', null, null, null, null, 'pawn', 'kings']),
  f: List(['bishop', 'pawn', null, null, null, null, 'pawn', 'bishop']),
  g: List(['knight', 'pawn', null, null, null, null, 'pawn', 'knight']),
  h: List(['rook', 'pawn', null, null, null, null, 'pawn', 'rook']),
});

export const Chess = {
  initialize: () => defaultLayout,
  makeMove: (board, fromCol, fromRow, toCol, toRow) => {
    const piece = this.board.getIn[(fromCol, fromRow)];
    const valid = piece && piece.move(board, fromCol, fromRow, toCol, toRow);
  },
  getMoves: (board, column, row) => {
    console.log('here', board);
    console.log('column', column);
    console.log('row', row);
    return List();
    // const { type, color } = board.getIn([column, row]);
  },
  checkCheck: (board) => {
    console.log(board);
  },
};
