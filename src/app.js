import _ from 'lodash';
import './style.css';
// import { add } from './utils';

// console.log(_);
function component() {
  const element = document.createElement('div');
  // element.innerHTML = 'hello,webpack' + add(2, 4);
  // element.classList.add('hello');

  const button = document.createElement('button');
  const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);


  return element;
}


document.body.appendChild(component());
