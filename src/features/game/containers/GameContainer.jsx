import { createElement, PureComponent } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { map } from 'react-immutable-proptypes';

import { GameBoard } from 'Game/components/GameBoard';

import { updateBoard } from 'Ducks/GameDuck';

const mapStateToProps = state => ({ board: state.getIn(['game', 'board']) });
@connect(mapStateToProps, { updateBoard })
export class GameContainer extends PureComponent {
  static propTypes = {
    board: map.isRequired,
    updateBoard: func.isRequired,
  }

  componentDidMount() {
    this.props.updateBoard();
  }

  handleSquareClick = (column, row) => {
    console.log(`clicking square ${column}${row + 1}`);
  }

  render() {
    return (
      <GameBoard board={this.props.board} onClick={this.handleSquareClick} />
    );
  }
}
