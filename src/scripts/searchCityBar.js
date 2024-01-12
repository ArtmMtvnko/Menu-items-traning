import saveLastLocation from './localStorage'
import { fetchWeather } from './fetchWeater'

const form = document.querySelector('.search-form')
const searchBar = document.querySelector('.search-bar')
let inputValue

form.addEventListener('submit', e => {
    e.preventDefault()
    inputValue = searchBar.value.trim()
    searchBar.value = null

    fetchWeather({ location: inputValue })
    .then(data => {
        console.log('C:', data.current.temp_c)
        console.log('F:', data.current.temp_f)
        saveLastLocation(inputValue)
    })
})