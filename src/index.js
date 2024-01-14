import './index.html'
import './styles/index.scss'

import './scripts/measurement'
import './scripts/searchCityBar'

import { fetchWeather } from './scripts/fetchWeater'
import { refreshDataInUI } from './scripts/refreshUI'
import { refreshCards } from './scripts/forecastCards'

const lastLocation = localStorage.getItem('last location')

fetchWeather({ location: lastLocation })
    .then(data => {
        refreshDataInUI(data)
        refreshCards(data)
    })
    .catch(console.error)
