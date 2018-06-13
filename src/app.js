import './style.css'
import { add } from './utils';
import _ from 'lodash';
console.log(_)
function component() {
  var element = document.createElement('div');
  element.innerHTML = 'hello,webpack' + add(2, 4);
  element.classList.add('hello');
  return element
}


document.body.appendChild(component());