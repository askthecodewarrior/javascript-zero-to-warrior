import './style.css'

document.querySelector('#app').innerHTML = `
  <section id="center">
    <h1 id="title">Hello, warrior!</h1>
    <button id="btn" class="counter">Click me</button>
  </section>
`

const title = document.querySelector('#title')
const button = document.querySelector('#btn')

button.addEventListener('click', () => {
  title.textContent = 'You clicked the button!'
  console.log('The button was clicked')
})
