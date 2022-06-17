import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  AddServiceModal,
  Meta,
  SProviderLayout,
  AddProductModal,
  AddImagesModal,
  DeleteProductModal,
} from "../../components";
import { AiFillStar } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSpring } from "react-spring";

export default function Profile() {
  const [toggleState, setToggleState] = useState("Services");
  const active =
    "text-gray-900 underline underline-offse  t-4 decoration-red-900/100 cursor-pointer";
  const innactive = "text-gray-600 no-underline hover:undeline cursor-pointer";

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [showModal, setShowModal] = useState(false);

  const [showImageModal, setShowImageModal] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [files, setFiles] = useState({
    name: "Myfiles",
  });

  console.log(files);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openImageModal = () => {
    setShowImageModal((prev) => !prev);
  };

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  return (
    <div className="relative flex bg-GreyBackground">
      <Meta title="Profile" />

      <SProviderLayout />
      <div className="absolute right-0 flex items-center justify-center m-8">
        <p className="mr-4 font-bold">User Name</p>
        <img src="" className="w-10 h-10 bg-gray-900 rounded-full" alt="" />
      </div>
      <div className="block w-full mx-10 my-32 space-x-4 md:flex">
        <div className="relative flex items-center justify-center w-1/4 text-black bg-white rounded-3xl">
          <div className="flex flex-col items-center justify-center my-4 mt-4">
            <img
              src=""
              alt="Profile image"
              className="w-32 h-32 rounded-full bg-GreyBackground"
            />
            <div className="mt-2 text-YellowText">
              <p>Catoris barbershop</p>
            </div>
            <p className="mt-2 font-bold uppercase">Professional</p>
            <div className="flex items-center justify-center mt-2 text-YellowText">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-center mt-2">
                <p className="uppercase text-YellowText">Business Hours</p>
              </div>
              <div className="mt-2">
                <div className="flex items-center font-semibold uppercase justify-evenly">
                  <h4>Sun {" :"}</h4>
                  <h5 className="text-RedBackground">9am - 2pm</h5>
                </div>
              </div>
              <div className="flex items-center justify-center mt-10 text-white">
                <Link href="#" passHref>
                  <a className="px-2 py-1 rounded bg-RedBackground">
                    Set Up Business Hours
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 mr-8">
          <div className="flex justify-between mx-4 font-semibold uppercase">
            <div
              className={`${toggleState === "Services" ? active : innactive}`}
              onClick={() => toggleTab("Services")}
            >
              Services
            </div>
            <div
              className={`${toggleState === "Reviews" ? active : innactive}`}
              onClick={() => toggleTab("Reviews")}
            >
              Reviews
            </div>

            <div
              className={`${toggleState === "Product" ? active : innactive}`}
              onClick={() => toggleTab("Product")}
            >
              Product
            </div>
          </div>
          <div
            className={
              toggleState === "Services"
                ? "active-content relative w-full text-black bg-white rounded-3xl h-1/2"
                : "content relative w-full text-black bg-white rounded-3xl h-1/2"
            }
          >
            <div style={animation}>
              <div className="flex items-center justify-center mt-16">
                <button
                  onClick={openModal}
                  className="px-2 py-1 text-white rounded bg-RedBackground"
                >
                  Set up Services
                </button>
                <AddServiceModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            </div>

            <div className="flex justify-between m-4">
              <div>
                <p className="font-semibold">Haircut</p>
                <p className="text-sm text-gray-500">$20 an hour</p>
              </div>
              <div className="grid place-content-center">
                <Link href="#" passHref>
                  <a className="px-2 py-1 text-white rounded bg-RedBackground">
                    Edit
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === "Reviews"
                ? "active-content relative w-full text-black bg-white rounded-3xl h-1/2"
                : "content relative w-full text-black bg-white rounded-3xl h-1/2"
            }
          >
            <p className="m-4 font-semibold">No Reviews Here Yet.</p>

            <div className="flex justify-between m-4">
              <div>
                <p className="font-semibold">Customer 1</p>
                <p className="text-sm text-gray-500">
                  Excellent serveices provided.
                </p>
              </div>
              <div className="flex items-center justify-center mt-2 text-YellowText">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === "Product"
                ? "active-content relative flex items-center justify-center w-full text-black bg-white rounded-3xl h-1/2"
                : "content relative flex items-center justify-center w-full text-black bg-white rounded-3xl h-1/2"
            }
          >
            <div style={animation}>
              <div className="flex items-center justify-center mt-16">
                <button
                  onClick={openModal}
                  className="px-2 py-1 text-white rounded bg-RedBackground"
                >
                  Add Product
                </button>
                <AddProductModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            </div>

            <div className="flex justify-between m-4">
              <div>
                <p className="font-semibold">Hair Dye</p>
                <p className="text-sm text-gray-500">$20 for an hour</p>
              </div>
              <div className="grid place-content-center">
                <button
                  onClick={openModal}
                  className="px-2 py-1 text-white rounded bg-RedBackground"
                >
                  <RiDeleteBin5Line />
                </button>

                <DeleteProductModal
                  showDeleteModal={showDeleteModal}
                  setShowDeleteModal={setShowDeleteModal}
                />
              </div>
            </div>
          </div>
          <div className="relative grid w-full grid-cols-2 mt-4 text-black bg-white rounded-3xl h-1/2 ">
            <div>
              <div className="flex items-center justify-center w-full mt-20 bg-white rounded-3xl">
                <div style={animation}>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={openImageModal}
                      className="px-2 py-1 text-white rounded bg-RedBackground"
                    >
                      Add Images
                    </button>
                    <AddImagesModal
                      showImageModal={showImageModal}
                      setShowImageModal={setShowImageModal}
                      files={files}
                      setFiles={setFiles}
                    />
                  </div>
                </div>
              </div>
              <div className="grid hidden grid-cols-4 m-2">
                <div>
                  <img src="../../../Vector.png" />
                </div>
                <div>
                  <img src="../../../Vector.png" />
                </div>
                <div>
                  <img src="../../../Vector.png" />
                </div>
                <div>
                  <img src="../../../Vector.png" />
                </div>
              </div>
            </div>
            <div>
              <iframe
                className="rounded-l-none rounded-3xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                width="380"
                height="200"
                frameborder="0"
                // style="border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
