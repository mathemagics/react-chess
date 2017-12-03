import { createElement, PureComponent } from 'react';
import { string } from 'prop-types';

export class MainComponent extends PureComponent {
  static propTypes = {
    content: string.isRequired,
  }

  render() {
    return (
      <div>{this.props.content}</div>
    );
  }
}
