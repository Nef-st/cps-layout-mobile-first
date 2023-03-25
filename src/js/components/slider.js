class Slider {
  constructor(sliderSelector) {
    this.sliderContainer = document.querySelector(sliderSelector)
    this.slider = this.sliderContainer.querySelector('.slider')
    this.sliderItems = this.sliderContainer.querySelectorAll('.slider__item')
    this.dots = this.sliderContainer.querySelectorAll('.slider__dot')
    this.dotContainer = this.sliderContainer.querySelector(
      '.slider__pagination'
    )
    this.slideWidth = this.sliderItems[0].clientWidth
    this.currentSlide = 0
    this.touchStartX = null
    this.touchEndX = null

    // привязка контекста обработчиков событий
    this.moveSlider = this.moveSlider.bind(this)
    this.handleDotClick = this.handleDotClick.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
    this.handleResize = this.handleResize.bind(this)

    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  // добавление обработчиков событий
  addListeners() {
    this.dots[this.currentSlide].classList.add('active')

    this.dotContainer.addEventListener('click', this.handleDotClick)
    this.slider.addEventListener('touchstart', this.handleTouchStart)
    this.slider.addEventListener('touchmove', this.handleTouchMove)
    this.slider.addEventListener('touchend', this.handleTouchEnd)
  }

  // удаление обработчиков событий
  removeListeners() {
    this.dotContainer.removeEventListener('click', this.handleDotClick)
    this.slider.removeEventListener('touchstart', this.handleTouchStart)
    this.slider.removeEventListener('touchmove', this.handleTouchMove)
    this.slider.removeEventListener('touchend', this.handleTouchEnd)
  }

  handleResize() {
    if (window.innerWidth < 769) {
      this.slideWidth = this.sliderItems[0].clientWidth
      this.addListeners()
    } else {
      this.moveSlider(0)
      this.removeListeners()
    }
  }

  moveSlider(index) {
    // Wrap around to beginning if at end of slides
    if (index >= this.sliderItems.length) {
      index = 0
      // Wrap around to end if at beginning of slides
    } else if (index < 0) {
      index = this.sliderItems.length - 1
    }
    this.slider.style.transform = `translateX(-${
      index * (this.slideWidth + 16)
    }px)`
    this.dots.forEach((dot) => dot.classList.remove('active'))
    this.dots[index].classList.add('active')
    this.currentSlide = index
  }

  handleDotClick(event) {
    if (event.target.classList.contains('slider__dot')) {
      const index = Array.from(this.dots).indexOf(event.target)
      this.moveSlider(index)
    }
  }

  handleTouchStart(event) {
    this.touchStartX = event.touches[0].clientX
  }

  handleTouchMove(event) {
    this.touchEndX = event.touches[0].clientX
  }

  handleTouchEnd() {
    if (this.touchStartX - this.touchEndX > 50) {
      this.moveSlider(this.currentSlide + 1)
    } else if (this.touchEndX - this.touchStartX > 50) {
      this.moveSlider(this.currentSlide - 1)
    }
    this.touchStartX = null
    this.touchEndX = null
  }
}

export default Slider
