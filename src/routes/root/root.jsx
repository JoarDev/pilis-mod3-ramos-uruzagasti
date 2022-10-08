export default function Root() {
    const locationList = [
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

    return (
      <>
        <div>
          <h1>Weather App</h1>
          <button>Add new location</button>
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