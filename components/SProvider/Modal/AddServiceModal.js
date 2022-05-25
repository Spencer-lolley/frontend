import React, { useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ImCancelCircle } from "react-icons/im";
export default function AddServiceModal({ showModal, setShowModal }) {
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const modalRef = useRef();
  const keyPress = useCallback (e => {
    if(e.key === "Escape" && showModal){
      setShowModal(false);
    };
  },[setShowModal,showModal])
  
  useEffect(() => {
    document.addEventListener('keydown',keyPress);
    return () => document.removeEventListener('keydown',keyPress);
  },[keyPress])

  return (
    <>
      {showModal ? (
        <div
        ref={modalRef}
        onClick={closeModal}
          tabindex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full overflow-x-hidden overflow-y-auto transition ease-in-out delay-150 bg-gray-800 bg-opacity-50 modal-container md:inset-0 h-modal md:h-full "
        >
          <div
            className="relative grid text-black bg-white rounded-lg modal-wrapper"
            showModal={showModal}
          >
            <div className="m-8 modal-content">
              <h3 className="m-5 font-semibold uppercase text-RedBackground">
                Add Service
              </h3>
              <div className="m-5">
                <form>
                  <div className="relative text-lg duration-300 transform bg-transparent border-b-2 border-gray-300 form-group focus-within:border-RedBackground">
                    <input
                      type="text"
                      name="serviceName"
                      className="w-full py-4 m-0 transition ease-in-out bg-transparent border-none outline-none form-control placeholder:italic focus:outline-none "
                      placeholder="Service Name"
                    />
                  </div>
                  <div className="relative text-lg duration-300 transform bg-transparent border-b-2 border-gray-300 form-group focus-within:border-RedBackground">
                    <input
                      type="text"
                      name="description"
                      className="w-full py-4 m-0 transition ease-in-out bg-transparent border-none outline-none form-control placeholder:italic focus:outline-none "
                      placeholder="Description"
                    />
                  </div>
                  <div className="relative text-lg duration-300 transform bg-transparent border-b-2 border-gray-300 form-group focus-within:border-RedBackground">
                    <input
                      type="text"
                      name="charge"
                      className="w-full py-4 m-0 transition ease-in-out bg-transparent border-none outline-none form-control placeholder:italic focus:outline-none "
                      placeholder="Charge"
                    />
                  </div>
                  <div className="relative text-lg duration-300 transform bg-transparent border-b-2 border-gray-300 form-group focus-within:border-RedBackground">
                    <input
                      type="text"
                      name="duration"
                      className="w-full py-4 m-0 transition ease-in-out bg-transparent border-none outline-none form-control placeholder:italic focus:outline-none "
                      placeholder="Duration of service"
                    />
                  </div>
                  <div className="float-right mt-10">
                    <input
                      type="submit"
                      value="Save"
                      className="cursor-pointer px-10 font-semibold text-white uppercase rounded-lg bg-RedBackground"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="relative rounded-lg rounded-l-none bg-RedBackground ">
              <div className="absolute -bottom-1">
                <Image
                  src="../../../Vector.png"
                  layout="intrinsic"
                  width={700}
                  height={1200}
                />
              </div>
              <div className="float-right m-6 cursor-pointer">
                <ImCancelCircle
                  className="text-white"
                  onClick={() => setShowModal((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
