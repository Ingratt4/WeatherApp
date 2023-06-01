import React from 'react'
import '../src/index.css'


export default function HourlyForecast () {
  return (
    <div className='hourly-forecast-main-container'>
      <h4>Todays Forecast</h4>
      <div className='hourly-forecast-data-container'>
        <div className='hourly-forecast-items-list'>
            <ul className='hourly-forecast-data-item'>
              <li>time</li>
              <li>
                <img alt='image of weather'></img>
              </li>
              <li className='hourly-forecast-data-item-temperature'>Temperature</li>
            </ul>

            <ul className='hourly-forecast-data-item'>
              <li>time</li>
              <li>
                <img alt='image of weather'></img>
              </li>
              <li className='hourly-forecast-data-item-temperature'>Temperature</li>
            </ul>

            <ul className='hourly-forecast-data-item'>
              <li>time</li>
              <li>
                <img alt='image of weather'></img>
              </li>
              <li className='hourly-forecast-data-item-temperature'>Temperature</li>
            </ul>

            <ul className='hourly-forecast-data-item'>
              <li>time</li>
              <li>
                <img alt='image of weather'></img>
              </li>
              <li className='hourly-forecast-data-item-temperature'>Temperature</li>
            </ul>

            <ul className='hourly-forecast-data-item'>
              <li>time</li>
              <li>
                <img alt='image of weather'></img>
              </li>
              <li className='hourly-forecast-data-item-temperature'>Temperature</li>
            </ul>

            <ul className='hourly-forecast-data-item'>
              <li>time</li>
              <li>
                <img alt='image of weather'></img>
              </li>
              <li className='hourly-forecast-data-item-temperature'>Temperature</li>
            </ul>

        </div>
      </div>
    </div>
  )
}
