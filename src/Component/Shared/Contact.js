import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_5f8agpu",
        "template_iht5fim",
        form.current,
        "w0OrPMrUchpFghCNg"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("email send Success");
          }
        },
        (error) => {
          if (error.status === 400) {
            toast.error("Email not send");
          }
        }
      );
  };
  return (
    <div className="p-12" id="contact">
      <h1 className="md:text-5xl text-4xl font-bold text-center">
        Get in Touch
      </h1>
      <div class="divider"></div>

      <div class="card m-auto md:w-2/3 bg-base-100 shadow-xl">
        <div class="card-body">
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-4">
              <div class="form-control w-full">
                <input
                  type="text"
                  placeholder="Name"
                  class="input input-bordered w-full "
                  {...register("name", { required: true })}
                />
                <label class="label">
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
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
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
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
                {errors.subject && (
                  <span className="text-red-500">This field is required</span>
                )}
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
                {errors.message && (
                  <span className="text-red-500">This field is required</span>
                )}
              </label>
            </div>

            <input
              className="btn btn-primary capitalize"
              type="submit"
              value="send message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
