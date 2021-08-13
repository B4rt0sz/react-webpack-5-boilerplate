import add from './add'
import './style.css'

const btn = document.querySelector('button')
btn.addEventListener('click', () => console.log('click'))

console.log(add(8, 21))

document.querySelector('.text').innerHTML = 'JS works properly?'
