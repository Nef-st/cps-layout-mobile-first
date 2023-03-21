class ReadMore {
  constructor(section, mode = 'text') {
    this.list = document.querySelector(section)
    this.button = this.list.querySelector('.button--name--read-more')
    this.listElements = this.list.querySelector('.read-more__list')
    this.hiddenElements = this.listElements.querySelectorAll('.hidden')

    this.toggleReadMore = this.toggleReadMore.bind(this)

    this.button.addEventListener('click', () => this.toggleReadMore(mode))
  }

  toggleReadMore(mode) {
    if (mode === 'block') {
      if (this.hiddenElements[0].style.maxHeight) {
        this.hideReadMoreBlocks()
      } else {
        this.showReadMoreBlocks()
      }
    } else if (mode === 'text') {
      if (this.listElements.style.height === '160px') {
        this.showReadMoreText()
      } else {
        this.hideReadMoreText()
      }
    }
  }

  showReadMoreBlocks() {
    this.button.innerHTML =
      '<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/><p>Свернуть</p>'
    this.hiddenElements.forEach((element) => {
      element.style.maxHeight = 100 + '%'
      element.style.opacity = 1
      element.style.transform = 'translateY(0)'
    })
  }

  hideReadMoreBlocks() {
    this.button.innerHTML =
      '<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/><p>Показать все</p>'
    this.hiddenElements.forEach((element) => {
      element.style.maxHeight = null
      element.style.opacity = 0
      element.style.transform = 'translateY(-100px)'
    })
  }

  showReadMoreText() {
    this.button.innerHTML =
      '<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/><p>Свернуть</p>'
    this.listElements.style.height = 'calc(100% - 50px)'
  }
  hideReadMoreText() {
    this.button.innerHTML =
      '<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/><p>Читать далее</p>'
    this.listElements.style.height = '160px'
  }
}

export default ReadMore
