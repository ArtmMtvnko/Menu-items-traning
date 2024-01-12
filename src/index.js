import './index.html'
import './styles/index.scss'

import './scripts/searchCityBar'

// async function fetchWeather(options) {
//     const response = await fetch(
//         `https://api.weatherapi.com/v1/forecast.json?key=8875a932605d4a86b91230215241001&q=${options.location}&days=7&aqi=yes&alerts=no`
//     )
//     const data = await response.json()
//     console.log(data)

//     return data
// }

// fetchWeather({ location: 'Kyiv' })
//     .then(data => {
//         console.log('C:', data.current.temp_c)
//         console.log('F:', data.current.temp_f)
//     })
