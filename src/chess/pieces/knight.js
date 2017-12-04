import { List } from 'immutable';
import { isValidMove } from '../utilities';

export const knight = {
  canMove: (board, fromLoc, toLoc) => {
    const moves = List([
      [fromLoc[0] + 2, fromLoc[1] + 1],
      [fromLoc[0] + 2, fromLoc[1] - 1],
      [fromLoc[0] - 2, fromLoc[1] + 1],
      [fromLoc[0] - 2, fromLoc[1] + 1],
      [fromLoc[0] + 1, fromLoc[1] + 2],
      [fromLoc[0] + 1, fromLoc[1] - 2],
      [fromLoc[0] + 1, fromLoc[1] + 2],
      [fromLoc[0] + 1, fromLoc[1] - 2],
    ]);
    return moves.filter(isValidMove(board, fromLoc, toLoc));
  },
};
