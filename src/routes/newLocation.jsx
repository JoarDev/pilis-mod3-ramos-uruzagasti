import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../hooks/useLocation";

export default function NewLocation() {
    const { addNewLocation } = useLocation()
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        addNewLocation(data)
        navigate("/")
    }

    return (
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
      );
  }