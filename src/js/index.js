import Slider from './components/Slider'
import Modal from './components/Modal'
import ReadMore from './components/ReadMore'

import '../scss/style.scss'

const sliders = {}
const readMoreLists = {}
const modals = {}

sliders['brands'] = new Slider('.slider__container--brands')
sliders['techniques'] = new Slider('.slider__container--techniques')
sliders['priceList'] = new Slider('.slider__container--price')

readMoreLists['about-us'] = new ReadMore('.about-us')
readMoreLists['brands'] = new ReadMore('.slider__container--brands')
readMoreLists['technique'] = new ReadMore('.slider__container--techniques')

modals['sidebar'] = new Modal('modal--sidebar', 'button-burger', '1440block')
