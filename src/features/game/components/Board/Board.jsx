import { createElement, PureComponent } from 'react';
import { map } from 'react-immutable-proptypes';

import { Square, Row } from './styles';

const renderSquare = columnIndex => (square, rowIndex) => {
  const black = (columnIndex.charCodeAt(0) + rowIndex) % 2 === 0;
  const key = `${columnIndex}${rowIndex}`;
  return (
    <Square key={key} black={black}>
      {`it's ${black}`}
    </Square>
  );
};

const renderRow = (column, columnIndex) => (
  <Row key={columnIndex}>
    {column.map(renderSquare(columnIndex))}
  </Row>
);

export class Board extends PureComponent {
  static propTypes = {
    board: map.isRequired,
  }
  render() {
    const { board } = this.props;
    return board.map(renderRow).toArray();
  }
}
