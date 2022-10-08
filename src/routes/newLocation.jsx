import { useForm } from "react-hook-form";

export default function NewLocation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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