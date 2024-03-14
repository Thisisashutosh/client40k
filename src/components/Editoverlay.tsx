"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { auth } from "@/firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function Editoverlay(props) {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [data, setData] = useState({
    productName: "",
    productType: "",
    productCode: "",
    productQuantity: "",
    productBatchId:"",
    productId:"",
  });

  const handleproducteditform = async (e:any) => {
    e.preventDefault();
    // setData({...data,userId:props.userId})
    const updatedData = { ...data, productId: props.productId };

    try {
      // Make PUT request to the backend
      const response = await axios.put(
        "http://localhost:8080/product/editproduct",
        updatedData
      );

      // Handle response
      if (response.data.status === "success") {
        console.log("Product details updated successfully");
        toast.success(response.data.message);
        // Handle success scenario
      } else {
        console.error("Error:", response.data.message);
        toast.error(response.data.message);
        // Handle error scenario
      }
    } catch (error: any) {
      console.error("Error:", error.message);
      toast.error(error.message);
      // Handle error scenario
    }
  };

  return (
    <>
      <div className="">
        <Toaster />
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Edit product details
                        </Dialog.Title>
                        <div className="mt-2">
                          <div className="">
                            <label
                              className="block mb-2 text-sm font-medium text-gray-600 "
                              htmlFor="LoggingEmailAddress"
                            >
                              Product name
                            </label>
                            <input
                              id="LoggingEmailAddress"
                              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
                              type="text"
                              onChange={(e) =>
                                setData({ ...data, productName: e.target.value })
                              }
                            />
                          </div>
                          <div className="">
                            <label
                              className="block mb-2 text-sm font-medium text-gray-600 "
                              htmlFor="LoggingEmailAddress"
                            >
                              Product type
                            </label>
                            <input
                              id="LoggingEmailAddress"
                              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
                              type="text"
                              onChange={(e) =>
                                setData({ ...data, productType: e.target.value })
                              }
                            />
                          </div>
                          <div className="">
                            <label
                              className="block mb-2 text-sm font-medium text-gray-600 "
                              htmlFor="LoggingEmailAddress"
                            >
                              Product code
                            </label>
                            <input
                              id="LoggingEmailAddress"
                              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
                              type="text"
                              onChange={(e) =>
                                setData({ ...data, productCode: e.target.value })
                              }
                            />
                          </div>
                          <div className="">
                            <label
                              className="block mb-2 text-sm font-medium text-gray-600 "
                              htmlFor="LoggingEmailAddress"
                            >
                              Product quantity
                            </label>
                            <input
                              id="LoggingEmailAddress"
                              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
                              type="text"
                              onChange={(e) =>
                                setData({ ...data, productQuantity: e.target.value })
                              }
                            />
                          </div>
                          <div className="">
                            <label
                              className="block mb-2 text-sm font-medium text-gray-600 "
                              htmlFor="LoggingEmailAddress"
                            >
                              Batch ID
                            </label>
                            <input
                              id="LoggingEmailAddress"
                              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
                              type="text"
                              onChange={(e) =>
                                setData({ ...data, productBatchId: e.target.value })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 w-full py-3 flex items-center justify-center md:justify-start md:px-10 gap-3">
                    <button
                      type="button"
                      className=" px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                      onClick={handleproducteditform}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className=" px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                      onClick={props.handleCloseOverlay}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
