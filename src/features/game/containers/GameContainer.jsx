import { createElement, PureComponent } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { map, list } from 'react-immutable-proptypes';

import { GameBoard } from 'Game/components/GameBoard';

import { clickBoard, initializeBoard, getHighlighted } from 'Ducks/GameDuck';

const mapStateToProps = state => ({
  board: state.getIn(['game', 'board']),
  selected: state.getIn(['game', 'selected']),
  highlighted: getHighlighted(state),
});

@connect(mapStateToProps, { initializeBoard, clickBoard })
export class GameContainer extends PureComponent {
  static propTypes = {
    board: map.isRequired,
    selected: map.isRequired,
    highlighted: list.isRequired,
    initializeBoard: func.isRequired,
    clickBoard: func.isRequired,
  }

  componentDidMount() {
    this.props.initializeBoard();
  }

  render() {
    console.log('hhh', this.props.highlighted);
    return (
      <GameBoard
        board={this.props.board}
        highlighted={this.props.highlighted}
        selected={this.props.selected}
        onClick={this.props.clickBoard}
      />
    );
  }
}
