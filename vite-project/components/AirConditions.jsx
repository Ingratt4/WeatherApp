import React from "react";
import '../src/index.css'

export default function AirConditions(){


    return(

        <div className="airconditions-main-container">
                <div className="airconditions-top">
                <h4>air conditions</h4>
                <button id="airconditions-button">See more</button>
                </div>
            <div className="airconditions-items-container">
                <ul className="airconditions-left">
                    <li>Real Feel: 
                        <h3>30</h3>
                        </li>
                    <li>Chance of rain: 
                    <h3>0</h3>
                    </li>
                </ul>
                <ul className="airconditions-right">
                    <li>Wind: 
                    <h3>0</h3>
                    </li> 
                    <li>UV Index: 
                    <h3>0</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}