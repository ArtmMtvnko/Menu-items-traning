import saveLastLocation from './localStorage'
import { fetchWeather } from './fetchWeater'
import { refreshDataInUI } from './refreshUI'
import { refreshCards } from './forecastCards'

const form = document.querySelector('.search-form')
const searchBar = document.querySelector('.search-bar')
let inputValue

form.addEventListener('submit', (e) => {
    e.preventDefault()
    inputValue = searchBar.value.trim()
    searchBar.value = null

    fetchWeather({ location: inputValue })
    .then(data => {
        console.log('Celsius:', data.current.temp_c)
        console.log('Fahrenheit:', data.current.temp_f)
        saveLastLocation(data.location.name)
        refreshDataInUI(data)
        refreshCards(data)
    })
    .catch(console.error)

})