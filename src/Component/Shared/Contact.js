import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="p-12">
      <h1 className="text-5xl font-bold text-center">Get in Touch</h1>
      <div class="divider"></div>

      <div class="card m-auto w-2/3 bg-base-100 shadow-xl">
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4">
            <div class="form-control w-full">
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered w-full "
                {...register("name", { required: true })}
              />
              <label class="label">
                {errors.name && <span className="text-red-500">This field is required</span>}
              </label>
            </div>
            <div class="form-control w-full ">
              <input
                type="text"
                placeholder="Email"
                class="input input-bordered w-full"
                {...register("email", { required: true })}
              />
              <label class="label">
                {errors.email && <span className="text-red-500">This field is required</span>}
              </label>
            </div>
            </div>
            <div class="form-control w-full ">
              <input
                type="text"
                placeholder="Subject"
                class="input input-bordered w-full "
                {...register("subject", { required: true })}
              />
              <label class="label">
                {errors.subject && <span className="text-red-500">This field is required</span>}
              </label>
            </div>
            <div class="form-control w-full">
              <textarea
                type="text"
                placeholder="Message"
                class="input input-bordered w-full"
                {...register("message", { required: true })}
              />
              <label class="label">
                {errors.message && <span className="text-red-500">This field is required</span>}
              </label>
            </div>

            <input className="btn btn-primary capitalize" type="submit" value="send message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
