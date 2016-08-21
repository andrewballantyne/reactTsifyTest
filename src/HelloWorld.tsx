import * as React from 'react';

import { AbstractStatelessComponent } from './ReactHelpers';

type helloWorldProps = {
  name?:string;
};

class HelloWorld extends AbstractStatelessComponent<helloWorldProps> {
  public render():JSX.Element {
    const { name } = this.props;
    return (
      <div>
        <h1 style={this.getStyles()}>The world says 'Hello', {name || 'Batman'}.</h1>
        <p>Open the code and look in the src folder for main.tsx and HelloWorld.tsx for inline
          comments.</p>
      </div>
    );
  }

  private getStyles():Object {
    return {
      color: '#999'
    };
  }
}

export type HelloWorldProps = helloWorldProps;

export default HelloWorld;
