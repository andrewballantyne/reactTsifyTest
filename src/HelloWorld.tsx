import * as React from 'react';

type props = {
  name?:string // note the ?, this denotes the typescript optional parameter
};
type state = {};

class HelloWorld extends React.Component<props, state> {
  render():JSX.Element {
    const { name } = this.props;
    return (
      <div>
        The world says 'Hello', {name || 'Batman'}.
      </div>
    );
  }
}

export default HelloWorld;
