import add from './add'

const btn = document.querySelector('button')
btn.addEventListener('click', () => console.log('click'))

console.log(add(8, 21))

document.querySelector('.text').innerHTML = 'JS works properly?'
