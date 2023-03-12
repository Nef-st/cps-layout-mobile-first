class ReadMore {
  constructor(section) {
    this.list = document.querySelector(section)
    this.button = this.list.querySelector('.read-more__button')
    this.listElements = this.list.querySelector('.read-more__list')
    this.hiddenElements = this.listElements.querySelectorAll('.hidden')

    this.button.addEventListener('click', this.toggleReadMore.bind(this))
  }

  toggleReadMore() {
    if (this.hiddenElements[1].style.maxHeight) {
      this.hideReadMore()
    } else {
      this.showReadMore()
    }
  }

  showReadMore() {
    this.button.innerHTML =
      '<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/><p>Свернуть</p>'
    this.hiddenElements.forEach((element) => {
      element.style.maxHeight = 100 + '%'
      element.style.opacity = 1
      element.style.transform = 'translateY(0)'
    })
  }

  hideReadMore() {
    this.button.innerHTML =
      '<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/><p>Читать далее</p>'
    this.hiddenElements.forEach((element) => {
      element.style.maxHeight = null
      element.style.opacity = 0
      element.style.transform = 'translateY(-100px)'
    })
  }
}

new ReadMore('.about-us')
