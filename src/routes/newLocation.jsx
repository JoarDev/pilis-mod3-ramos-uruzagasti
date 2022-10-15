import { useForm } from "react-hook-form";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../hooks/useLocation";

const getGeocodingUrl = ({ lat, lng }) => `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;

function MapComponent({ setValue, markerLocation }) {
  useMapEvents({
    click: (e) => {
      const {lat , lng} = e.latlng
      setValue("lat",lat)
      setValue("long",lng)
      
      fetch(getGeocodingUrl(e.latlng))
        .then((response) => response.json())
        .then((data) => {
          setValue("name",data.locality);
        })
        .catch((error) => console.error(error));
    },
  });
  return (
    <Marker position={[markerLocation.lat, markerLocation.long]}>
      <Popup>
        Pulsa en otro lugar para cambiar el marcador
      </Popup>
    </Marker>
  );
}

export default function NewLocation() {
    const { addNewLocation } = useLocation()
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
    const onSubmit = (data) => {
        addNewLocation(data)
        navigate("/")
    }
    const lat = watch("lat", 0)
    const long = watch("long", 0)

    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column", gap: 10, margin: 50}}>
            <label>
              name
              <input {...register("name", { required: true })} />
            </label>
            {errors.name && <span>This field is required</span>}
            <label>
              latitude
              <input {...register("lat", { required: true })} />
            </label>
            {errors.lat && <span>This field is required</span>}
            <label>
              longitude
              <input {...register("long", { required: true })} />
            </label>
            {errors.long && <span>This field is required</span>}
            
            <input type="submit" />
          </form>
          <MapContainer center={[-24.185786055358633, -65.29951773114738]} zoom={14}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapComponent
            setValue={setValue}
            markerLocation={{lat,long}}
            />
          </MapContainer>
        </div>
      );
  }