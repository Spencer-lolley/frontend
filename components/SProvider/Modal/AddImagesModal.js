import React, { useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ImCancelCircle } from "react-icons/im";
import { AiFillPlusCircle } from 'react-icons/ai';
export default function AddImagesModal({ showImageModal, setShowImageModal, files, setFiles }) {
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowImageModal(false);
    }
  };
  const modalRef = useRef();
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showImageModal) {
        setShowImageModal(false);
      }
    },
    [setShowImageModal, showImageModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const uploadHandler = e => {
    const file = e.target.files[0];
    file.isUpload = true
    // setFiles([...files, file])

    // upload file
    const formData = new FormData();
    formData.append (
      file.name,
      file,
      file.name
    )
  }
  
  return (
    <>
      {showImageModal ? (
        <div
          ref={modalRef}
          onClick={closeModal}
          tabindex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full overflow-x-hidden overflow-y-auto transition ease-in-out delay-150 bg-gray-800 bg-opacity-50 modal-container md:inset-0 h-modal md:h-full "
        >
          <div
            className="relative grid text-black bg-white rounded-lg modal-wrapper"
            showModal={showImageModal}
          >
            <div className="m-8 modal-content">
              <h3 className="m-5 font-semibold uppercase text-RedBackground">
                Add Images
              </h3>
              <div className="m-5">
                <form onChange={uploadHandler}>
                  <div className="file-card">
                    <div className="file-inputs">
                      <input type="file" accept="image/*"/>
                      <div className="flex flex-col">
                        <button type="button">
                        <AiFillPlusCircle className="w-10 h-10 text-RedBackground"/>
                        </button>
                        <p className="mt-2 font-semibold text-center">Drop image</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="float-right mt-10">
                    <input
                      type="submit"
                      value="Save"
                      className="px-10 font-semibold text-white uppercase rounded-lg cursor-pointer bg-RedBackground"
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
                  onClick={() => setShowImageModal((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
