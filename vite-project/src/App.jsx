
import './App.css'
import React, { useEffect, useState } from "react"
import VerticalNavbar from '../components/VerticalNavbar';
import SearchBar from '../components/SearchBar';
import SimpleForecast from '../components/SimpleForecast';
import HourlyForecast from '../components/HourlyForecast';
import AirConditions from '../components/AirConditions';
import SevenDayForecast from '../components/SevenDayForecast';
import axios from 'axios';



function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.open-meteo.com/v1/forecast?latitude=42.30&longitude=-83.02&hourly=temperature_2m")
      .then((response) => {
        console.log(response);
        setWeatherData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    
    <div className='main-container'>
    <div className='leftside'>
    <VerticalNavbar weatherData = {weatherData} />
    </div>
    <div className='middle'>
    <SearchBar />
    <SimpleForecast />
    <HourlyForecast />
    <AirConditions />
    </div>
    <div className='rightside'>
    <SevenDayForecast />
    </div>
    </div>
  );
}
  


export default App
