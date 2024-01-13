const apiBasic = 'https://api.weatherapi.com/v1/forecast.json?'
const apiKey = 'key=8875a932605d4a86b91230215241001'

export async function fetchWeather(options) {
    try {
        const response = await fetch(
            apiBasic + apiKey + `&q=${options.location}&days=7&aqi=yes&alerts=no`,
            { mode: 'cors' }
        )
        const data = await response.json()
        console.log(data)

        return data
    } catch (err) { console.error(err) }

}