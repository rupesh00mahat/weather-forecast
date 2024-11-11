import React from 'react'
import ContainerBox from './container-box'
import { WiHumidity } from 'react-icons/wi';
import { MdOutlineWindPower } from 'react-icons/md';

interface HourlyForecastProps {
  data: any
}

function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const today = new Date();
  const isToday =
    year === today.getFullYear() &&
    month === String(today.getMonth() + 1).padStart(2, "0") &&
    day === String(today.getDate()).padStart(2, "0");
  return {
    date: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}`,
    isToday
  };
}



function HourlyForecast({data}: HourlyForecastProps) {
  console.log(data);
  return (
    <div className='hourly-forecast my-5'>
      <h3 className='hourly-forecast-title text-lg font-bold mb-5'>Hourly Forecast</h3>
      <div className="hourly-forecast-box flex gap-5 overflow-x-scroll scroll-container">
        {data && data.map(({dt, weather, main, wind}:{dt: number; weather:any, main:any, wind: any}, index: number)=>{
          let dateAndTime = formatTimestamp(dt);
            if(dateAndTime.isToday ){
             return  <ContainerBox key={dt} extraClass='min-w-40 flex flex-col items-center text-sm gap-2'>
             <span className='time text-sm'>{dateAndTime.time}</span>
             <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} height={"50px"} width={"50px"}/>
             <span className="temperature">{main.temp} &deg; C</span>
             <span className="humidity flex items-center gap-1">
              <WiHumidity size={20}/>
              <span>{main.humidity} %</span>
             </span>
             <span className="wind  flex items-center gap-2">
              <MdOutlineWindPower size={20}/>
              <span>{wind.speed} mph</span>
             </span>
           </ContainerBox>
           }
        })}
      
      </div>
    </div>
  )
}

export default HourlyForecast