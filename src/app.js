import './style.css'
import { add } from './utils';

console.log(11221)
function component() {
  var element = document.createElement('div');
  element.innerHTML = 'hello,webpack' + add(2, 4);
  element.classList.add('hello');
  return element
}


document.body.appendChild(component());