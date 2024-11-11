"use client";
import Navbar from "@/app/components/navbar";
import WeatherDetail from "@/app/components/weather-detail";
import HourlyForecast from "@/app/components/hourly-forecast";
import DayForecast from "@/app/components/day-forecast";
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState<any>();
  const [forecastData, setForecastData] = useState<any>();

  const fetchWeather = async () => {
    await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=f3776047ead711ab4f0e8c88af6e8e0a') // api for the get request
      .then(response => response.json())
      .then(data => setData(data));
  }

  const fetchForecast = async () => {
    await fetch('https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=f3776047ead711ab4f0e8c88af6e8e0a') // api for the get request
    .then(response => response.json())
    .then(data => setForecastData(data));
  }

  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, [])
  return (
    <div className="">
      <Navbar />
      <div className="w-[90%] mx-auto mt-20">
        {data != undefined && (
          <WeatherDetail temperature={data?.main.temp} feelsLike={data?.main.feels_like}
          description={data.weather[0].description}
          icon={data.weather[0].icon}
          wind = {data.wind.speed}
          humidity= {data.main.humidity}
          minTemp={data.main.temp_min}
          maxTemp={data.main.temp_max}
          clouds={data.clouds.all}
          visibility={data.visibility}
          />
        )}
        {forecastData && <HourlyForecast data = {forecastData.list}/>}
        {/* <DayForecast /> */}
      </div>
    </div>
  );
}
