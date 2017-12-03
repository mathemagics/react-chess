import { createElement, PureComponent } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { map } from 'react-immutable-proptypes';

import { Board } from 'Game/components/Board';

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

  render() {
    return (
      <Board board={this.props.board} />
    );
  }
}
