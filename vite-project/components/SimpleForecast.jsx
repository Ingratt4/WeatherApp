import React from "react";
import '../src/index.css'



export default function SimpleForecast(){





    return(
        <div className="simple-forecast-container">
            <div className="simple-forecast-text-container">
            <h1 id="simple-forecast-location">Location</h1>
            <p id = "simple-forecast-rainchance">Chance of rain: </p>
            <h3 id ="simple-forecast-temperature">30</h3>
            </div>
            <img alt="image depicted what kind of weather"></img>

        </div>
        



    )
}