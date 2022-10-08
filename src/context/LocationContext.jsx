import { createContext, useState } from "react";

export const LocationContext = createContext({
  locationList: {},
  addNewLocation: () => {}
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
  const [locationList, setlocationList] = useState(INITIAL_LOCATION_LIST);
  const addNewLocation = (data) => {
    //fetch from api
    const newLocation = {
        ...data,
        temp: 21,
        windSpeed: 10,
    }

    setlocationList((prev) => [...prev, newLocation])
  }
  const value = { locationList, addNewLocation };

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
}