import { createElement, PureComponent } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';

import { loadMainContent } from 'Ducks/MainDuck';
import { MainComponent } from '../components/MainComponent';

const mapStateToProps = state => ({ mainContent: state.getIn(['main', 'mainContent']) });
const mapDispatchToProps = { loadMainContent };

@connect(mapStateToProps, mapDispatchToProps)
export class MainContainer extends PureComponent {
  static propTypes = {
    mainContent: string.isRequired,
    loadMainContent: func.isRequired,
  }
  componentDidMount() {
    this.props.loadMainContent();
  }
  render() {
    const { mainContent } = this.props;
    return (
      <MainComponent content={mainContent} />
    );
  }
}
