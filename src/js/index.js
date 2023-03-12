import Slider from './components/slider'
import './components/burger'
import './components/read-more'

import '../scss/style.scss'

const sliders = {}

sliders['brands'] = new Slider('.slider__container--brands')
sliders['techniques'] = new Slider('.slider__container--techniques')
sliders['priceList'] = new Slider('.slider__container--price-list')
