import Slider from './components/slider'
import './components/burger'
import ReadMore from './components/read-more'

import '../scss/style.scss'

const sliders = {}
const readMoreLists = {}

sliders['brands'] = new Slider('.slider__container--brands')
sliders['techniques'] = new Slider('.slider__container--techniques')
sliders['priceList'] = new Slider('.slider__container--price')

readMoreLists['about-us'] = new ReadMore('.about-us')
readMoreLists['brands'] = new ReadMore('.slider__container--brands')
readMoreLists['technique'] = new ReadMore('.slider__container--techniques')
