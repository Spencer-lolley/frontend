import React from "react";
import { Footer, Meta, Nav } from "../components";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Link from "next/link";
import SingleProduct from "../components/Product/SingleProduct";

export default function checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <>
      <Meta title="Checkout" />
      <Nav />
      <div className="w-full p-8">
        <div className="grid gap-10 md:grid-cols-2">
          <SingleProduct
            productName="nice and lovely"
            image={`../../products/productImage.png`}
          >
            <div className="p-8">
              <div className="flex justify-between text-xl font-semibold md:text-2xl">
                <h4 className="text-black">Total</h4>
                <h5 className="text-RedBackground">KES 3300</h5>
              </div>

              <div className="flex justify-between text-xl font-semibold md:text-2xl">
                <h4 className="text-black">
                  Shipping Fee
                </h4>
                <h5 className="text-RedBackground">
                  KES 300
                </h5>
              </div>
            </div>
          </SingleProduct>
          <div className="rounded-lg shadow-lg bg-GreyBackground">
            <div className="p-8">
              <div>
                <h3 className="text-xl font-semibold uppercase">
                  Shipping Address
                </h3>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mt-2 duration-300 transform bg-transparent border-b-2 border-gray-400 tex2t-lg form-group focus-within:border-RedBackground">
                  <input
                    type="text"
                    name="firstName"
                    className="w-full py-4 m-0 transition ease-in-out bg-transparent border-none outline-none form-control placeholder:italic focus:outline-none "
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "Please input your First Name here!",
                      minLength: {
                        value: 2,
                        message: "Name too short!",
                      },
                      maxLength: {
                        value: 20,
                      },
                    })}
                  />
                  <p className="text-RedBackground">
                    {errors.firstName?.message}
                  </p>
                </div>

                <div className="mt-2 duration-300 transform bg-transparent border-b-2 border-gray-400 tex2t-lg form-group focus-within:border-RedBackground">
                  <input
                    type="text"
                    name="lastName"
                    className="w-full py-4 m-0 transition ease-in-out bg-transparent border-none outline-none form-control placeholder:italic focus:outline-none "
                    placeholder="Last Name"
                    {...register("lasttName", {
                      required: "Please input your Last Name here!",
                      minLength: {
                        value: 2,
                        message: "Name too short!",
                      },
                      maxLength: {
                        value: 20,
                      },
                    })}
                  />
                  <p className="text-RedBackground">
                    {errors.lastName?.message}
                  </p>
                </div>

                <div className="mt-2 duration-300 transform bg-transparent border-b-2 border-gray-400 tex2t-lg form-group focus-within:border-RedBackground">
                  <input
                    type="text"
                    name="address"
                    className="w-full py-4 m-0 transition ease-in-out bg-transparent border-none outline-none form-control placeholder:italic focus:outline-none "
                    placeholder="Address"
                    {...register("address", {
                      required: "Please input your Address here!",
                      minLength: {
                        value: 2,
                        message: "Address too short!",
                      },
                      maxLength: {
                        value: 20,
                      },
                    })}
                  />
                  <p className="text-RedBackground">
                    {errors.address?.message}
                  </p>
                </div>

                <div className="mt-2 duration-300 transform bg-transparent border-b-2 border-gray-400 tex2t-lg form-group focus-within:border-RedBackground">
                  <input
                    type="text"
                    name="city"
                    className="w-full py-4 m-0 transition ease-in-out bg-transparent border-none outline-none form-control placeholder:italic focus:outline-none "
                    placeholder="City - Postal Code"
                    {...register("city", {
                      required: "Please input your City - Postal Code here!",
                      minLength: {
                        value: 2,
                        message: "Postal Code too short!",
                      },
                      maxLength: {
                        value: 20,
                      },
                    })}
                  />
                  <p className="text-RedBackground">{errors.city?.message}</p>
                </div>

                <div className="float-right my-10 text-white bg-RedBackground">
                  <button className="px-2 py-1 font-semibold text-white uppercase rounded-md bg-RedBackground">
                    <Link href="./checkout" passHref>
                      <a>Checkout</a>
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
