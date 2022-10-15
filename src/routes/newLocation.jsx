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
        <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column", gap: 10, margin: 50}}>
          <label>
            Name:
            <input {...register("name:", { required: true })} />
          </label>
          {errors.name && <span>This field is required</span>}
          <label>
            Latitude
            <input {...register("lat", { required: true })} />
          </label>
          {errors.lat && <span>This field is required</span>}
          <label>
            Longitude
            <input {...register("long", { required: true })} />
          </label>
          {errors.long && <span>This field is required</span>}
          
          <input type="submit" />
        </form>
      );
  }