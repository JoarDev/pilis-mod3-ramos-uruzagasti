import { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";
import { ClimateCard } from "./ClimateCard";

export const ClimateCard = () => {

    const { locationList } = useContext(LocationContext);
    return (
        <div>
            {
            locationList.length > 0 ? (
            locationList.map(location => (
                    <div key={location.id} >
                        <h1>Ciudad</h1>
                        <i>{" City: " + location.name}</i>
                        <br />
                        <i>{" Latitude: " + location.lat}</i>
                        <br />
                        <i>{" Length: " + location.lon}</i>
                        <br />
                        <i>{" City: " + location.city}</i>
                        <br />
                        <i>{"Wind Speed: " + location.winspeed}</i>
                        <br />
                        <i>{" Temperature: " + location.temp + "ºC"}</i>
                    </div>
                ))
            ) :(
                <div>
                    Loading... Please wait
                </div>
            )
            }
        </div>
    )
}

