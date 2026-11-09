
import { useState } from 'react'

function Weather() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function getWeather(e) {
    e.preventDefault()

    if (!city.trim()) {
      setError('Please enter a city name!')
      return
    }

    setLoading(true)
    setError('')
    setWeather(null)

    try {
      const geoResponse = await fetch(
        
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
      )

      if (!geoResponse.ok) throw new Error('City search failed')

      const geoData = await geoResponse.json()
      const place = geoData.results?.[0]

      if (!place) throw new Error('City not found!')

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m`
      )

      if (!response.ok) throw new Error('Weather data unavailable')

      const data = await response.json()

      setWeather({
        city: place.name,
        country: place.country,
        ...data.current,
      })
    } catch (err) {
      setError(err.message || 'Unable to get weather!')
    } finally {
      setLoading(false)
    }
  }

  function getWeatherInfo(code) {
    if (code === 0) return { icon: '☀️', text: 'Clear Sky' }
    if ([1, 2, 3].includes(code)) return { icon: '🌤️', text: 'Partly Cloudy' }
    if ([45, 48].includes(code)) return { icon: '🌫️', text: 'Foggy' }
    if ([51, 53, 55].includes(code)) return { icon: '🌦️', text: 'Drizzle' }
    if ([61, 63, 65].includes(code)) return { icon: '🌧️', text: 'Rainy' }
    if ([71, 73, 75].includes(code)) return { icon: '❄️', text: 'Snowfall' }
    if ([80, 81, 82].includes(code)) return { icon: '🌧️', text: 'Rain Showers' }
    if ([95, 96, 99].includes(code)) return { icon: '⛈️', text: 'Thunderstorm' }
    return { icon: '🌡️', text: 'Weather' }
  }

  const info = weather ? getWeatherInfo(weather.weather_code) : null

  return (
    <div className="rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-950 p-6 text-white shadow-2xl sm:p-8">

      <h2 className="mb-2 text-center text-3xl font-bold text-blue-400">
        Weather App
      </h2>

      <p className="mb-7 text-center text-slate-400">
        Check weather of any city
      </p>

      <form onSubmit={getWeather} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-400"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500 disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && (
        <p className="mt-6 text-center text-red-400">{error}</p>
      )}

      {loading && (
        <p className="mt-6 text-center text-blue-300">Loading weather...</p>
      )}

      {weather && (
        <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/70 p-6 text-center">

          <h3 className="text-2xl font-bold">
            📍 {weather.city}, {weather.country}
          </h3>

          <div className="my-5 text-7xl">
            {info.icon}
          </div>

          <p className="text-6xl font-extrabold text-blue-400">
            {weather.temperature_2m}°C
          </p>

          <p className="mt-3 text-lg text-slate-300">
            {info.text}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-slate-800 p-4">
              <p className="text-2xl">💧</p>
              <p className="mt-2 text-sm text-slate-400">Humidity</p>
              <p className="mt-1 font-bold">
                {weather.relative_humidity_2m}%
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              <p className="text-2xl">💨</p>
              <p className="mt-2 text-sm text-slate-400">Wind Speed</p>
              <p className="mt-1 font-bold">
                {weather.wind_speed_10m} km/h
              </p>
            </div>

            <div className="col-span-2 rounded-xl bg-slate-800 p-4">
              <p className="text-2xl">🌡️</p>
              <p className="mt-2 text-sm text-slate-400">Feels Like</p>
              <p className="mt-1 font-bold">
                {weather.apparent_temperature}°C
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default Weather
