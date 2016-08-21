/** We of course need our React external library **/
import * as React from 'react';

/**
 * Props/State defining...
 *
 * One of many ways to create props and state; React.Component requires both <Props, State>.
 *
 * Other ways can include:
 *   // Directly
 *   React.Component<{...}, {...}>
 *
 *   // A 'don't care' approach; 'any' type is of course any structure
 *   React.Component<any, any>
 */
type props = {
  /** Standard property definitions for any TypeScript 'type'; the ? denotes optional */
  name?:string
};
type state = {};

class HelloWorld extends React.Component<props, state> {
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

/** Expose our props; possible use of someone wanting to reference it as part of their props **/
export type HelloWorldProps = props;

/** Allows this file to be a target of 'import HelloWorld from 'HelloWorld';' **/
export default HelloWorld;
