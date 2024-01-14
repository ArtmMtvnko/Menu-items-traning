import { getTemperature } from "./measurement"

export const temperature = document.querySelector('.temperature__number')
const temperatureInfo = document.querySelector('.temperature__info')
const sunstate = document.querySelector('.temperature__sunstate')
const mainWeatherIcon = document.querySelector('#mainWeatherIcon')

export function refreshDataInUI(data) {
    // temperature.innerText = data.current.temp_c + '℃'
    temperature.innerText = getTemperature(data)
    temperatureInfo.children[0].innerText = `${data.location.name}, ${data.location.country}`
    sunstate.children[0].innerText = 'Sunrise: ' + data.forecast.forecastday[0].astro.sunrise
    sunstate.children[1].innerText = 'Sunset: ' + data.forecast.forecastday[0].astro.sunset
    mainWeatherIcon.src = data.current.condition.icon
}