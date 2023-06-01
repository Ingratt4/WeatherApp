/* eslint-disable react/prop-types */
import React from "react";
import '../src/index.css'

export default function VerticalNavbar({ weatherData }){


// eslint-disable-next-line react/prop-types
const latitude = weatherData.latitude;
const elevation = weatherData.elevation;

    return(

        <div className = "vertical-navbar-container">
        <ul className= "vertical-navbar-list">
            <li><img alt="logo image"></img></li>
            <li>{latitude}</li>
            <li>{elevation}</li>
            <li>Map</li>
            <li>Settings</li>
        </ul>
       </div>
      
    )
}