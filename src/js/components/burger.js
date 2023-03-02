const btnBurger = document.getElementById('button-burger')
const btnClose = document.getElementById('button-close')

btnBurger.addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('sidebar--open')
})
btnClose.addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('sidebar--open')
})
