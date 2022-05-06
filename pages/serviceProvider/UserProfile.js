import React from "react";
import { Meta } from "../../components";
import { useForm } from "react-hook-form";

export default function UserProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <div className="flex bg-GreyBackground">
      <Meta title="User Profile" />
      <div className="hidden md:flex w-2/5 md:w-1/4 h-screen">
        {" "}
        <div class="w-60 h-full shadow-md bg-RedBackground px-1 absolute py-4">
          <div className="flex uppercase text-2xl m-6">
            <span>
              <h1 className="font-semibold">Company</h1>
            </span>
            <span>Logo</span>
          </div>
        </div>
      </div>

      <div className="user-profile bg-white text-black relative w-full justify-center m-10 relative md:-left-20">
        <div className="my-24 mx-28">
          <div className="mb-2">
            <h3 className="uppercase font-semibold text-xl text-left">
              User Profile
            </h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:grid grid-cols-2 gap-10">
              <div className="form-group transform border-b-2 border-gray-400 bg-transparent text-lg duration-300 focus-within:border-RedBackground">
                <input
                  type="text"
                  name="firstName"
                  className="form-control
                    w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none
                    transition
                    ease-in-out
                    m-0
                    py-4
                    "
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "Please input your First Name!",
                    minLength: {
                      value: 3,
                      message: "Name too short!",
                    },
                  })}
                />
                <p className="text-RedBackground">
                  {errors.firstName?.message}
                </p>
              </div>

              <div className="form-group transform border-b-2 border-gray-400 bg-transparent text-lg duration-300 focus-within:border-RedBackground">
                <input
                  type="text"
                  name="lastName"
                  className="form-control
                    w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none
                    transition
                    ease-in-out
                    m-0
                    py-4
                    "
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Please input your Last Name!",
                    minLength: {
                      value: 3,
                      message: "Name too short!",
                    },
                  })}
                />
                <p className="text-RedBackground">{errors.lastName?.message}</p>
              </div>

              <div className="form-group transform border-b-2 border-gray-400 bg-transparent text-lg duration-300 focus-within:border-RedBackground">
                <input
                  type="text"
                  name="businessName"
                  className="form-control
                    w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none
                    transition
                    ease-in-out
                    m-0
                    py-4
                    "
                  placeholder="Business Name"
                  {...register("businessName", {
                    required: "Please input your preferred Business Name!",
                    minLength: {
                      value: 3,
                      message: "Business Name too short!",
                    },
                  })}
                />
                <p className="text-RedBackground">
                  {errors.businessName?.message}
                </p>
              </div>
              <div className="form-group transform border-b-2 border-gray-400 bg-transparent text-lg duration-300 focus-within:border-RedBackground">
                <input
                  type="text"
                  name="streetAddress"
                  className="form-control
                    w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none
                    transition
                    ease-in-out
                    m-0
                    py-4
                    "
                  placeholder="Street Address"
                  {...register("streetAddress", {
                    required: "Please input your street address!",
                  })}
                />
                <p className="text-RedBackground">
                  {errors.streetAddress?.message}
                </p>
              </div>
              <div className="form-group transform border-b-2 border-gray-400 bg-transparent text-lg duration-300 focus-within:border-RedBackground">
                <input
                  type="text"
                  name="city"
                  className="form-control
                    w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none
                    transition
                    ease-in-out
                    m-0
                    py-4
                    "
                  placeholder="City"
                  {...register("city", {
                    required: "This field is required!",
                    minLength: {
                      value: 3,
                      message: "City name too short!",
                    },
                  })}
                />
                <p className="text-RedBackground">
                  {errors.businessName?.message}
                </p>
              </div>
              <div className="form-group transform border-b-2 border-gray-400 bg-transparent text-lg duration-300 focus-within:border-RedBackground">
                <input
                  type="text"
                  name="zipCode"
                  className="form-control
                    w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none
                    transition
                    ease-in-out
                    m-0
                    py-4
                    "
                  placeholder="Zip Code"
                  {...register("zipCode", {
                    required: "Please input your cip code!",
                  })}
                />
                <p className="text-RedBackground">{errors.zipCode?.message}</p>
              </div>
            </div>
            <div className="md:float-right mt-20 flex justify-center items-center">
              <input
                type="submit"
                value="Save & Continue"
                className="bg-black text-white px-4 py-2 rounded-full text-sm"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
