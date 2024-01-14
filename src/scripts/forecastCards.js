const forecastCards = document.querySelectorAll('.forecast__day')

const celsiusRadioBtn = document.querySelector('#celsius')

export function refreshCards(data) {
    const days = data.forecast.forecastday
    if (celsiusRadioBtn.checked) {
        for (let i = 0; i < 6; i++) {
            forecastCards[i].children[1].innerText = days[i].day.avgtemp_c + '℃'
        }
    } else {
        for (let i = 0; i < 7; i++) {
            forecastCards[i].children[1].innerText = days[i].day.avgtemp_f + '°F'
        }
    }
}