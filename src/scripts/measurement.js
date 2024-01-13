import { temperature } from "./refreshUI"

const redioButtonsTempreature = document.querySelectorAll('.temperature-button')

const measurement = {
    celsius: 0,
    fahrenheit: 0
}

const symbols = {
    celsius: '℃',
    fahrenheit: '°F'
}

for (const button of redioButtonsTempreature) {
    button.addEventListener('click', e => {
        temperature.innerText = measurement[e.target.id] + symbols[e.target.id]
    })
}

export function getTemperature(data) {
    measurement.celsius = data.current.temp_c
    measurement.fahrenheit = data.current.temp_f

    for(let button of redioButtonsTempreature) {
        if (button.checked) {
            console.log(measurement[button.id])
            return measurement[button.id] + symbols[button.id]
        }
    }
}