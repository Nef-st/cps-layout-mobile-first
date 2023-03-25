class ReadMore {
  constructor(section) {
    this.list = document.querySelector(section)
    this.button = this.list.querySelector('.button--name--read-more')
    this.listElements = this.list.querySelector('.read-more__list')
    this.hiddenElements = this.listElements.querySelectorAll('.hidden')

    this.toggle = this.toggle.bind(this)
    this.resize = this.resize.bind(this)

    this.button.addEventListener('click', this.toggle)
    window.addEventListener('resize', this.resize)

    this.resize()
    this.hide()
  }

  resize() {
    if (window.innerWidth >= 769) {
      this.listHeight = '10rem'
    } else {
      this.listHeight = '8rem'
    }
  }

  toggle() {
    if (
      this.listElements.style.maxHeight === '160px' ||
      this.listElements.style.maxHeight === '8rem' ||
      this.listElements.style.maxHeight === '10rem'
    ) {
      this.show()
    } else {
      this.hide()
    }
  }

  show() {
    this.button.innerHTML =
      '<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/><p>Свернуть</p>'
    this.listElements.style.maxHeight = 'calc(100% - 50px)'
  }
  hide() {
    if (this.listElements.classList.contains('about-us--text')) {
      this.listElements.style.maxHeight = this.listHeight
      this.button.innerHTML =
        '<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/><p>Читать далее</p>'
    } else {
      this.listElements.style.maxHeight = '160px'
      this.button.innerHTML =
        '<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/><p>Показать все</p>'
    }
  }
}

export default ReadMore
