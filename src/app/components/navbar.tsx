import React, { useEffect, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

type Props ={
  fetchWeather: (value: string) => void;
  fetchFromLatAndLon: (value1: number,value2: number ) => void;
  name: string,
}

const Navbar: React.FC<Props> = ({fetchWeather, fetchFromLatAndLon,name}) =>{
  const [darkMode, setDarkMode] = useState(true);
  const locationRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const searchLocation = () => {
    if(locationRef?.current?.value !== ''){
      const location = locationRef?.current?.value;
        fetchWeather(location);
    }
  }

  const getUserGeoLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=> {
        fetchFromLatAndLon(position.coords.latitude, position.coords.longitude);
      },(error) =>{console.log('error', error)})
    }else{
      console.error('GeoLocation is not supported by this browser.');
    }
  }

  useEffect(()=>{
    getUserGeoLocation();
  },[])

  return (
    <div className="navbar h-20 bg-primary">
      <div className="navbar-content-wrapper w-[90%] mx-auto flex items-center justify-between pt-5">
        <div className="navbar-location flex items-center gap-2">
          <FaLocationDot size={18} />

          <h2 className="text-md">{name == ''? locationRef?.current?.value : name}</h2>
        </div>
        <div className="w-1/2 flex gap-5">
          <input
          ref={locationRef}
            type="text"
            id="search-city"
            className="w-full p-2 rounded-full bg-transparent border-2 border-foreground py-2 px-4 inline-block !outline-none "
          />
          <div className="flex">
            <button onClick={searchLocation}>Search</button>
          </div>
         
        </div>
        <button onClick={toggleTheme}>
            {darkMode ? (
              <MdOutlineLightMode size={20} />
            ) : (
              <MdOutlineDarkMode size={20} />
            )}
          </button>
      </div>
    </div>
  );
}

export default Navbar;
