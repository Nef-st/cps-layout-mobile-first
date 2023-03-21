const btnBurger = document.getElementById('button-burger')
const btnClose = document.getElementById('button-close')
const btnBg = document.getElementById('sidebar__background')

const sidebarResize = (props) => {
  if (window.innerWidth >= 1440) {
    document.getElementById('sidebar').classList.add('sidebar--open')
    btnClose.style.display = 'none'
    btnBurger.style.display = 'none'
  } else {
    document.getElementById('sidebar').classList.remove('sidebar--open')
    btnClose.style.display = 'block'
    btnBurger.style.display = 'block'
  }
}

btnBurger.addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('sidebar--open')
})
btnClose.addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('sidebar--open')
})
btnBg.addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('sidebar--open')
})

sidebarResize()
window.addEventListener('resize', () => {
  sidebarResize()
})
