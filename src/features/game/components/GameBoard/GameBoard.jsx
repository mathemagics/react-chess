import { createElement, PureComponent } from 'react';
import { map } from 'react-immutable-proptypes';
import { func } from 'prop-types';

import { Board, Square, Column } from './styles';

export class GameBoard extends PureComponent {
  static propTypes = {
    board: map.isRequired,
    onClick: func.isRequired,
  }

  handleClick = (column, row) => () => this.props.onClick(column, row);

  renderColumn = (column, columnIndex) => (
    <Column key={columnIndex}>
      {column.map(this.renderSquare(columnIndex)).reverse()}
    </Column>
  );

  renderSquare = columnIndex => (square, rowIndex) => {
    const black = (columnIndex.charCodeAt(0) + rowIndex) % 2 === 0;
    const key = `${columnIndex}${rowIndex}`;
    return (
      <Square key={key} black={black} onClick={this.handleClick(columnIndex, rowIndex)}>
        {`${columnIndex}${rowIndex + 1}`}
      </Square>
    );
  };

  render() {
    const { board } = this.props;
    return (
      <Board onSquareClick={this.handleSquareClick}>
        {board.map(this.renderColumn).toArray()}
      </Board>
    );
  }
}
