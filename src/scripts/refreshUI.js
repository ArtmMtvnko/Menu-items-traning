const temperature = document.querySelector('.temperature__number')
const temperatureInfo = document.querySelector('.temperature__info')
const sunstate = document.querySelector('.temperature__sunstate')

export function refreshDataInUI(data) {
    temperature.innerText = data.current.temp_c + '℃'
    temperatureInfo.children[0].innerText = `${data.location.name}, ${data.location.country}`
    sunstate.children[0].innerText = 'Sunrise: ' + data.forecast.forecastday[0].astro.sunrise
    sunstate.children[1].innerText = 'Sunset: ' + data.forecast.forecastday[0].astro.sunset
}