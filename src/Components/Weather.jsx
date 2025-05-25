import React from 'react';
import search_icon from '../assets/search.png';
import "./Weather.css";
import weather_icon from '../assets/cloud.png';

function Weather() {
  return <div className='weather'>
    <div className='search-bar'>
        <input type="text" placeholder='Search for a city'/>
        <img src={search_icon} alt="Search" />
    </div>
    <>
    <img src={weather_icon} alt="condition" className='weather-icon'/>


    </>
  </div>;
}

export default Weather;
