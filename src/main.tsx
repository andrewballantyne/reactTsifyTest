/** We include all our TypeScript typings (definitions for the TypeScript compiler) here **/
/// <reference path="_typings/include.d.ts" />

/** Then we import the needed external libraries **/
import * as React from 'react';
import * as ReactDOM from 'react-dom';

/** Of course we need our root component... **/
import HelloWorld from './HelloWorld';
/** BONUS! If you wanted to reference the props; the below line could replace the above line **/
// import HelloWorld, { HelloWorldProps } from './HelloWorld';

/** Render **/
ReactDOM.render(
  /** Two ways you can call the react component **/
  <HelloWorld name="Bruce Wayne" />,
  // <HelloWorld />,
  /** Our root div from the out/index.html **/
  document.getElementById('root')
);
