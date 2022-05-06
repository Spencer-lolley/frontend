import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Meta } from "../../components";

export default function RegisterBusiness() {
  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);
  const [passwordConfirmEye, setPasswordConfirmEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const handleConfirmPasswordClick = () => {
    setPasswordConfirmEye(!passwordConfirmEye);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => alert(JSON.stringify(data));
  console.log(errors);

  const password = watch("password");
  return (
    <div className="flex bg-GreyBackground">
      <Meta title="Register Business"/>

      <div className="hidden md:flex w-2/5 md:w-1/4 h-screen">
        {" "}
        <div class="w-60 min-h-full shadow-md bg-RedBackground px-1 absolute py-2">
          <div className="flex uppercase text-2xl m-6">
            <span>
              <h1 className="font-semibold">Company</h1>
            </span>
            <span>Logo</span>
          </div>
        </div>
      </div>

      <div className="min-h-full w-full py-8 justify-center px-10">
        <div className="flex">
          <div className="w-1/2">
            <h3 className="capitalize text-2xl font-semibold">
              List your business
            </h3>
            <form>
              <div className="mt-8 form-group transform border-b-2 border-gray-400 bg-transparent text-lg duration-300 focus-within:border-RedBackground">
                <input
                  type="text"
                  name="fullName"
                  className="form-control
                    w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none
                    transition
                    ease-in-out
                    m-0
                    py-4
                    "
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "Please input your Full Names here!",
                    minLength: {
                      value: 10,
                      message: "Name too short!",
                    },
                    maxLength: {
                      value: 20,
                    },
                  })}
                />
                <p className="text-RedBackground">{errors.fullName?.message}</p>
              </div>
              {/* phone */}
              <div className="mt-8 form-group transform border-b-2 border-gray-400 bg-transparent text-lg duration-300 focus-within:border-RedBackground">
                <input
                  type="tel"
                  name="phone"
                  className="form-control
                    w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none
                    transition
                    ease-in-out
                    m-0
                    py-4
                    "
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Please input your phone number!",
                    minLength: {
                      value: 10,
                      message: "Enter a valid phone number!",
                    },
                  })}
                />
                <p className="text-RedBackground">{errors.phone?.message}</p>
              </div>
              {/* Email */}
              <div className="mt-8 form-group transform border-b-2 border-gray-400 bg-transparent text-lg duration-300 focus-within:border-RedBackground">
                <input
                  type="email"
                  name="email"
                  className="form-control
                    w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none
                    transition
                    ease-in-out
                    m-0
                    py-4
                    "
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Please input your email address!",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Enter a valid Email address!",
                    },
                  })}
                />
                <p className="text-RedBackground">{errors.email?.message}</p>
              </div>
              {/* Password */}
              <div className="relative mt-8 form-group transform border-b-2 border-gray-400 bg-transparent text-lg duration-300 focus-within:border-RedBackground">
                <input
                  type={passwordEye === false ? "password" : "text"}
                  name="password"
                  className="form-control
                    w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none
                    transition
                    ease-in-out
                    m-0
                    py-4
                    "
                  placeholder="Password"
                  {...register("password", {
                    required: "Please provide a password!",
                    minLength: {
                      value: 8,
                      message: "Minimum Required length is 8",
                    },
                    pattern: {
                      value:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                      message:
                        "Password should contain uppercase, lowercase, numbers and one special character",
                    },
                  })}
                />
                <p className="text-RedBackground">{errors.password?.message}</p>
                <div className="absolute text-lg text-gray-600 top-5 right-5">
                  {passwordEye === false ? (
                    <AiFillEyeInvisible onClick={handlePasswordClick} />
                  ) : (
                    <AiFillEye onClick={handlePasswordClick} />
                  )}
                </div>
              </div>
              {/* Confirm password */}
              <div className="mt-8 form-group transform border-b-2 border-gray-400 bg-transparent text-lg duration-300 focus-within:border-RedBackground">
                <input
                  type={passwordConfirmEye === false ? "password" : "text"}
                  name="confirmPassword"
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  className="form-control
                    w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none
                    transition
                    ease-in-out
                    m-0
                    py-4
                    "
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password!",
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                />
                <p className="text-RedBackground">
                  {errors.confirmPassword && errors.confirmPassword.message}
                </p>

                <div className="absolute text-lg text-gray-600 top-5 right-5">
                  {passwordConfirmEye === false ? (
                    <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
                  ) : (
                    <AiFillEye onClick={handleConfirmPasswordClick} />
                  )}
                </div>
              </div>

              <div className="mt-4 flex text-sm font-semibold">
                <div className="mr-2">
                  <input type="checkbox" />
                </div>
                <div>
                  <p>Receive notification on new booking?</p>
                </div>
              </div>
            </form>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="flex flex-col italic font-sm items-center">
              <div>
                <Link href="#" passHref>
                  <a>Continue with Facebook</a>
                </Link>
              </div>
              <div>
                <Link href="#" passHref>
                  <a>Continue with Google</a>
                </Link>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative top-60 md:grid md:grid-cols-2">
                  <div className="flex flex-col justify-beteen mx-4 items-center">
                    <div>
                      <button
                        className="mx-4 uppercase bg-black rounded-full text-white px-10 py-2"
                        type="submit"
                      >
                        sign up
                      </button>
                    </div>

                    <div className="w-52">
                      <p className="text-sm">
                        By signing Up you agree to the terms of service and
                        privacy policy
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div>
                      <Link href="#">
                        <a
                          className="uppercase bg-black rounded-full text-white px-10 py-2"
                          type="submit"
                        >
                          log in
                        </a>
                      </Link>

                      <div>
                        <p className="text-sm">Already have an account?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
