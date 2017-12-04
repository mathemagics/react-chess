const isOnboard = ([column, row]) => column < 8 && row < 8;

const isAvailable = (board, [fromCol, fromRow], [toCol, toRow]) => {
  const turn = board.getIn([fromCol, fromRow, 'color']);
  const piece = board.getIn([toCol, toRow]);
  return !piece || piece.color !== turn;
};

export const isValidMove = (board, fromLoc, toLoc) => (
  isOnboard(toLoc) && isAvailable(board, fromLoc, toLoc)
);

export const checkCheck = (board) => {
  console.log('check check', board);
};
