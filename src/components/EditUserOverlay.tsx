"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { auth } from "@/firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

export default function EditoUserOerlay(props) {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [data, setData] = useState({
    email: "",
    phone: "",
    address: "",
    usertype: "",
  });

  const handleusereditform = (e: any) => {
    console.log(data);
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
                          Edit user details
                        </Dialog.Title>
                        <div className="mt-2">
                          <div className="">
                            <label
                              className="block mb-2 text-sm font-medium text-gray-600 "
                              htmlFor="LoggingEmailAddress"
                            >
                              Email Address
                            </label>
                            <input
                              id="LoggingEmailAddress"
                              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
                              type="email"
                              onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                              }
                            />
                          </div>
                          <div className="">
                            <label
                              className="block mb-2 text-sm font-medium text-gray-600 "
                              htmlFor="LoggingEmailAddress"
                            >
                              Phone
                            </label>
                            <input
                              id="LoggingEmailAddress"
                              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
                              type="email"
                              onChange={(e) =>
                                setData({ ...data, phone: e.target.value })
                              }
                            />
                          </div>
                          <div className="">
                            <label
                              className="block mb-2 text-sm font-medium text-gray-600 "
                              htmlFor="LoggingEmailAddress"
                            >
                              Address
                            </label>
                            <input
                              id="LoggingEmailAddress"
                              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
                              type="email"
                              onChange={(e) =>
                                setData({ ...data, address: e.target.value })
                              }
                            />
                          </div>
                          <div className="relative mt-5 w-fit">
                            <svg
                              className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 412 232"
                            >
                              <path
                                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                                fill="#648299"
                                fillRule="nonzero"
                              />
                            </svg>
                            <select
                              className="border text-sm font-medium text-gray-600 border-gray-300 rounded h-10 pl-5 pr-10 bg-gray-50 appearance-none"
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  usertype: (e.target as HTMLSelectElement)
                                    .value,
                                })
                              }
                            >
                              <option>User Type</option>
                              <option>Admin</option>
                              <option>Packaging</option>
                              <option>Rider</option>
                              <option>Finance</option>
                              <option>Super Admin</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 w-full py-3 flex items-center justify-center md:justify-start md:px-10 gap-3">
                    <button
                      type="button"
                      className=" px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                      onClick={handleusereditform}
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
