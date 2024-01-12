const temperature = document.querySelector('.temperature__number')
const temperatureInfo = document.querySelector('.temperature__info')

export function refreshDataInUI(data) {
    temperature.innerText = data.current.temp_c + '℃'
    temperatureInfo.children[0].innerText = `${data.location.name}, ${data.location.country}`
}