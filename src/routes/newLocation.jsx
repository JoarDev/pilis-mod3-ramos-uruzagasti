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
        <div style={{height: "100vh", backgroundColor: "#242424", display: "flex", background: "rgba(0,0,0,0.7)", padding:20}}>
          <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column", gap: 10, padding: 50, width: 300}}>
            <h3>Presiona en el cualquier lugar del mapa para rellenar automaticamente</h3>
            <label>
              Nombre de la ubicacion
              <input {...register("name", { required: true })} />
            </label>
            {errors.name && <span>This field is required</span>}
            <label>
              Latitud
              <input {...register("lat", { required: true })} />
            </label>
            {errors.lat && <span>This field is required</span>}
            <label>
              Longitud
              <input {...register("long", { required: true })} />
            </label>
            {errors.long && <span>This field is required</span>}
            
            <input type="submit" value="Guardar ubicacion"/>
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
      </div>
      );
  }