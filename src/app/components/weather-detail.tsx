"use client";

import React from 'react'
import ContainerBox from './container-box'
import Group from './group'
import { MdOutlineWindPower, MdVisibility } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";
import { IoCloudSharp } from "react-icons/io5";



const convertMeterToMile = (visibilityInMeters:number) => {
  const visibilityInMiles = visibilityInMeters * 0.000621371;
  return `${visibilityInMiles.toFixed(2)} mi`;
}

interface WeatherProps {
  temperature: number,
  feelsLike: number,
  description: string,
  wind: number,
  icon: string,
  humidity: number,
  minTemp: number,
  maxTemp: number,
  clouds: number,
  visibility: number
}

function WeatherDetail({ temperature, feelsLike, description,icon, wind, humidity, minTemp, maxTemp, clouds, visibility }: WeatherProps) {
  return (
    <div className=' grid sm:grid-cols-1 md:grid-cols-[1fr_3fr] gap-5'>
      <ContainerBox extraClass='px-10 pt-10 pb-0'>
        <img src={`https://openweathermap.org/img/w/${icon}.png`} height={"100px"} width={"100px"}/>

        <div className="main-temperature text-xl font-thin leading-10">{temperature.toFixed(1)}&deg; C</div>
        <div className='feels-link text-sm leading-10'>Feels Link: {feelsLike.toFixed(1)}&deg; C</div>
        <div className='weather-description text-base font-semibold'>{description.toUpperCase()}</div>
      </ContainerBox>
      <ContainerBox extraClass="p-8 grid grid-cols-2">
        <Group value={<>
          <div className='value-wrapper'>
            <MdOutlineWindPower size={30} />
            <span className='value'>{wind} mph</span>
          </div>

        </>} text="Wind" />
        <Group value={<>
          <div className='value-wrapper'>
            <WiHumidity size={30} />
            <span className='value'>{humidity} %</span>
          </div>

        </>} text="Humidity" />
        <Group value={<>
          <div className='value-wrapper'>
            <FaTemperatureArrowDown size={30} />
            <span className='value'>{minTemp.toFixed(1)} &deg;</span>
          </div>

        </>} text="Min. Temperature" />
        <Group value={<>
          <div className='value-wrapper'>
            <FaTemperatureArrowUp size={30} />
            <span className='value'>{maxTemp.toFixed(1)} &deg;</span>
          </div>

        </>
        } text="Max Temperature" />
        <Group value={<>
          <div className='value-wrapper'>
            <IoCloudSharp size={30} />

            <span className='value'>{clouds} %</span>
          </div>

        </>
        } text="Clouds Cover" />
        <Group value={<>
          <div className='value-wrapper'>
            <MdVisibility size={30} />
            <span className='value'>{convertMeterToMile(visibility)} </span>
          </div>

        </>
        } text="Visibility" />


      </ContainerBox>
    </div>
  )
}

export default WeatherDetail