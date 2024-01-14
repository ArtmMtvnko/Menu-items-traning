const forecastCards = document.querySelectorAll('.forecast__day')

const celsiusRadioBtn = document.querySelector('#celsius')

const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fryday', 'Saturday',
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fryday', 'Saturday'
]

const currentDayNumber = new Date().getDay()
console.log(currentDayNumber)

export function refreshCards(data) {
    const days = data.forecast.forecastday
    if (celsiusRadioBtn.checked) {
        for (let i = 0; i < 6; i++) {
            forecastCards[i].children[0].src = days[i + 1].day.condition.icon
            forecastCards[i].children[1].innerText = days[i + 1].day.avgtemp_c + '℃'
            forecastCards[i].children[2].innerText = daysOfWeek[currentDayNumber + i + 1]
        }
    } else {
        for (let i = 0; i < 7; i++) {
            forecastCards[i].children[0].src = days[i + 1].day.condition.icon
            forecastCards[i].children[1].innerText = days[i + 1].day.avgtemp_f + '°F'
            forecastCards[i].children[2].innerText = daysOfWeek[currentDayNumber + i + 1]
        }
    }
}