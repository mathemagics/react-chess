import { createElement, PureComponent } from 'react';
import { map } from 'react-immutable-proptypes';

import { Board, Square, Column } from './styles';

const renderSquare = columnIndex => (square, rowIndex) => {
  const black = (columnIndex.charCodeAt(0) + rowIndex) % 2 === 0;
  const key = `${columnIndex}${rowIndex}`;
  return (
    <Square key={key} black={black}>
      {`${columnIndex}${rowIndex + 1}`}
    </Square>
  );
};

const renderColumn = (column, columnIndex) => (
  <Column key={columnIndex}>
    {column.map(renderSquare(columnIndex)).reverse()}
  </Column>
);

export class GameBoard extends PureComponent {
  static propTypes = {
    board: map.isRequired,
  }
  render() {
    const { board } = this.props;
    return (
      <Board>
        {board.map(renderColumn).toArray()}
      </Board>
    );
  }
}
