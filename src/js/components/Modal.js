class Modal {
  constructor(section, btnOpen, mode = 'none') {
    this.mode = mode

    this.block = document.querySelector(`#${section}`)
    this.btnBurger = document.querySelector(`#${btnOpen}`)
    this.blackout = document.querySelector('#blackout')
    this.btnClose = this.block.querySelector('#button-close')

    this.sidebarResize = this.sidebarResize.bind(this)
    this.cutout = this.cutout.bind(this)

    this.addEventListeners()
    this.sidebarResize()
  }

  addEventListeners() {
    this.btnBurger.addEventListener('click', this.cutout.bind(this))
    this.btnClose.addEventListener('click', this.cutout.bind(this))
    this.blackout.addEventListener('click', this.cutout.bind(this))
    window.addEventListener('resize', this.sidebarResize)
  }

  cutout() {
    if (this.block.style.transform != 'none') {
      this.block.style.transform = 'none'
      this.blackout.style.display = 'block'
    } else {
      this.block.style.transform = `translateX(-${this.block.clientWidth}px)`
      this.blackout.style.display = 'none'
    }
  }

  sidebarResize() {
    const hideScreen = window.innerWidth >= 1440 ? 'none' : 'block'
    this.btnClose.style.display = hideScreen
    this.btnBurger.style.display = hideScreen

    console.log(`mode: ${this.mode}; widthW: ${window.innerWidth}`)

    if ((this.mode = '1440block') && window.innerWidth >= 1440) {
      this.block.style.transform = 'none'
    } else {
      this.block.style.transform = `translateX(-${this.block.clientWidth}px)`
    }
  }
}

export default Modal
