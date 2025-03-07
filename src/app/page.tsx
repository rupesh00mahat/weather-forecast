"use client";
import Navbar from "@/app/components/navbar";
import WeatherDetail from "@/app/components/weather-detail";
import HourlyForecast from "@/app/components/hourly-forecast";
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState<any>();
  const [forecastData, setForecastData] = useState<any>();
  const fetchWeather = async (location: string) => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f3776047ead711ab4f0e8c88af6e8e0a`) // api for the get request
      .then(response => response.json())
      .then(data => setData(data));
  }

  const fetchForecast = async (location: string) => {
    await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=f3776047ead711ab4f0e8c88af6e8e0a`) // api for the get request
    .then(response => response.json())
    .then(data => setForecastData(data));
  }
  const fetchWeatherFromL = async (latitude: number , longitude: number) => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=f3776047ead711ab4f0e8c88af6e8e0a`) // api for the get request
      .then(response => response.json())
      .then(data => setData(data));
  }

  const fetchForecastFromL = async (latitude: number, longitude: number) => {
    await fetch(`https://pro.openweathermap.org/data/2.5/forecast/?lat=${latitude}&lon=${longitude}&units=metric&appid=f3776047ead711ab4f0e8c88af6e8e0a`) // api for the get request
    .then(response => response.json())
    .then(data => setForecastData(data));
  }



  useEffect(() => {
    fetchWeather('London');
    fetchForecast('London');
  }, [])


console.log(data);
  

  return (
    <div >
      <Navbar
      fetchWeather={(value)=>{
        fetchWeather(value);
        fetchForecast(value);
      }}
      fetchFromLatAndLon = {(lat, lon)=>{
        fetchWeatherFromL(lat, lon);
        fetchForecastFromL(lat, lon);
      }}
      name={data !== undefined ?data?.name+','+data?.sys?.country: ''}
      />
      <div className="w-[90%] mx-auto mt-20">
        {data?.cod == '404' && <h3>Please Enter a valid city name.</h3>}
        {data != undefined && data.cod !== '404' && (
          <WeatherDetail temperature={data?.main?.temp} feelsLike={data?.main?.feels_like}
          description={data?.weather[0]?.description}
          icon={data?.weather[0]?.icon}
          wind = {data?.wind?.speed}
          humidity= {data?.main?.humidity}
          minTemp={data?.main?.temp_min}
          maxTemp={data?.main?.temp_max}
          clouds={data?.clouds?.all}
          visibility={data?.visibility}
          />
        )}
        {forecastData && forecastData.cod !== '404' && <HourlyForecast data = {forecastData.list}/>}
        {/* <DayForecast /> */}
      </div>
    </div>
  );
}
