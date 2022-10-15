import { createContext, useEffect, useState } from "react";

export const LocationContext = createContext({
  locationList: [],
  addNewLocation: () => { },
  removeLocation: () => { },
})

const INITIAL_LOCATION_LIST = [
  {
    name: "location 1",
    lat: "123",
    long: "123",
    temp: 21,
    windSpeed: 10,
  },
  {
    name: "location 2",
    lat: "123",
    long: "123",
    temp: 21,
    windSpeed: 10,
  },
]

export const LocationProvider = ({ children }) => {
  const [locationList, setLocationList] = useState([]);
  return (
    <LocationContext.Provider value={{locationList, setLocationList}}>
      {children}
    </LocationContext.Provider>
  )
}

/* const addNewLocation = async (data) => {

    //fetch from api
    const getWeatherURL = ({ lat, long }) => `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,windspeed_10m&timezone=America/Argentina/Jujuy&current_weather=true`
    try {
        const body = await (await fetch(getWeatherURL(data))).json()
        console.log("Open meteo response =>", body)
        const { temperature, windspeed } = body.current_weather
        const newLocation = {
            ...data,
            temp: temperature,
            windSpeed: windspeed,
        }
        setlocationList((prev) => [...prev, newLocation])
    } catch (error) {
        console.log("Open meteo error =>", error)
    }
}

const removeLocation = (name) => {
    setlocationList((prev) => prev.filter((location) => location.name !== name))
}

const value = { locationList, addNewLocation, removeLocation }; */
