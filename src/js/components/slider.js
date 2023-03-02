class Slider {
  constructor(sliderSelector) {
    this.sliderContainer = document.querySelector(sliderSelector)
    this.slider = this.sliderContainer.querySelector('.slider')
    this.sliderItems = this.sliderContainer.querySelectorAll('.slider-item')
    this.dots = this.sliderContainer.querySelectorAll('.slider-dot')
    this.dotContainer = this.sliderContainer.querySelector('.slider-pagination')
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

    // добавление обработчиков событий
    this.dotContainer.addEventListener('click', this.handleDotClick)
    this.slider.addEventListener('touchstart', this.handleTouchStart)
    this.slider.addEventListener('touchmove', this.handleTouchMove)
    this.slider.addEventListener('touchend', this.handleTouchEnd)

    this.dots[this.currentSlide].classList.add('active')
  }

  moveSlider(index) {
    this.slider.style.transform = `translateX(-${index * this.slideWidth}px)`
    this.dots.forEach((dot) => dot.classList.remove('active'))
    this.dots[index].classList.add('active')
  }

  handleDotClick(event) {
    if (event.target.classList.contains('slider-dot')) {
      this.currentSlide = Array.from(this.dots).indexOf(event.target)
      this.moveSlider(this.currentSlide)
    }
  }

  handleTouchStart(event) {
    this.touchStartX = event.touches[0].clientX
  }

  handleTouchMove(event) {
    this.touchEndX = event.touches[0].clientX
  }

  handleTouchEnd() {
    if (
      this.touchStartX - this.touchEndX > 50 &&
      this.currentSlide < this.sliderItems.length - 1
    ) {
      this.currentSlide++
      this.moveSlider(this.currentSlide)
    } else if (
      this.touchEndX - this.touchStartX > 50 &&
      this.currentSlide > 0
    ) {
      this.currentSlide--
      this.moveSlider(this.currentSlide)
    }
    this.touchStartX = null
    this.touchEndX = null
  }
}

export default Slider
