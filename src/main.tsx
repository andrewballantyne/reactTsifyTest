/// <reference path="_typings/include.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import HelloWorld from './HelloWorld';
/** BONUS! To reference the HelloWorld's props; the below line could replace the above line **/
// import HelloWorld, { HelloWorldProps } from './HelloWorld';

ReactDOM.render(
  /** Different ways you can call the react component **/
  <HelloWorld name="Bruce Wayne" />,
  // <HelloWorld name={1} />, // name is a number, not a valid prop value
  // <HelloWorld />, // valid because we made name optional
  /** Our root div from the out/index.html **/
  document.getElementById('root')
);
