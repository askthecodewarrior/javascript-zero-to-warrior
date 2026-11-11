import './style.css'

// TODO: change the heading's text to a greeting of your own
document.querySelector('#app').innerHTML = `
  <section id="center">
    <h1 id="title">Hello, warrior!</h1>
    <button id="btn" class="counter">Click me</button>
  </section>
`

const title = document.querySelector('#title')
const button = document.querySelector('#btn')

button.addEventListener('click', () => {
  // TODO: change what the heading says after a click
  title.textContent = 'You clicked the button!'
  // TODO: change the message the console shows
  console.log('The button was clicked')
})
