/* import { Link } from "react-router-dom";
import { useLocation } from "../../hooks/useLocation";
import { motion } from "framer-motion";


export default function Root() {
  const { locationList, removeLocation } = useLocation()
  return (
    <>
      <div style={{ margin: 50 }}>
        <Link to={"newLocation"}>
          <button>Add new location</button>
        </Link>
          <div style={{ display: "flex", gap: 10, margin: 20 }}>
            {
              locationList.map((location) => {
                return (
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }} key={location.name}>
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
} */
