import { Link } from "react-router-dom";
import { useLocation } from "../../hooks/useLocation";

export default function Root() {
    const { locationList } = useLocation()

    return (
      <>
        <div>
          <h1>Weather App</h1>
          <Link to={"newLocation"}>
            <button>Add new location</button>
          </Link>
          
          <div>
            {
                locationList.map((location) => {
                    return Object.entries(location).map(([property, value]) => {
                        return (
                            <div>{property}: {value}</div>
                        )
                    })
                })
            }
          </div>
        </div>
      </>
    );
  }