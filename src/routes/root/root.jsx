import { Link } from "react-router-dom";
import { useLocation } from "../../hooks/useLocation";
import { TiWeatherCloudy, TiPlus } from "react-icons/ti";

export default function Root() {
    const { locationList, removeLocation } = useLocation()

    return (
      <>
        <div>
          <div style={{display: "flex", gap: 10, padding: 30, justifyContent: "space-between", alignItems: "center", background: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)"}}>
            <h1> <TiWeatherCloudy/> Weather App</h1>
            <div style={{display: "flex", gap: 10}}>
            <Link to={"newLocation"}>
              <button> <TiPlus/> Add new location</button>
            </Link>
            <Link to={"freeNFT"}>
              <button>Get Free NFT</button>
            </Link>
            </div>
          </div>
          
          <div style={{display: "flex", gap: 10, margin: 20, padding: "10px 120px"}}>
            {
                locationList.map((location) => {
                    return (
                        <div style={{display: "flex", flexDirection: "column", gap: 3, background: "rgba(0,0,0,0.5)", padding:20, borderRadius:30}} key={location.name}>
                            {
                                Object.entries(location).map(([property, value]) => {
                                    return (
                                        <div key={property} >{property}: {value}</div>
                                    )
                                })
                            }
                            <button onClick={() => removeLocation(location.name)}>remove</button>
                        </div>
                    )
                })
            }
          </div>
        </div>
      </>
    );
  }