"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    desc: "",
    address: "",
    password: "",
    usertype: "",
  });

  const handleuserselection = (e: any) => {
    setData({ ...data, usertype: e.target.value });
  };

  return (
    <div>
      <div className="">
        <Toaster />
      </div>
      <div className="max-h-screen overflow-hidden border rounded p-6 bg-transparent flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded p-4 px-4 md:p-8">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-1">
                <div className="lg:col-span-3">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-5">
                      <label
                        htmlFor="full_name"
                        className="text-sm font-semibold text-gray-900"
                      >
                        User ID
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, id: e.target.value })
                        }
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        //value=""
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label
                        htmlFor="designation"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Name
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, name: e.target.value })
                        }
                        type="text"
                        name="designation"
                        id="designation"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        //value=""
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label
                        htmlFor="phone"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Email
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                        type="text"
                        name="phone"
                        id="phone"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // value=""
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label
                        htmlFor="biometric"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Phone Number
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, phone: e.target.value })
                        }
                        type="text"
                        name="biometric"
                        id="biometric"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // value=""
                        // placeholder=""
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label
                        htmlFor="residing_building"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Description
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, desc: e.target.value })
                        }
                        type="text"
                        name="residing_building"
                        id="residing_building"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // placeholder=""
                        // value=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="room"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Address
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, address: e.target.value })
                        }
                        type="text"
                        name="room"
                        id="room"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // value=""
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label
                        htmlFor="month"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Password
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, password: e.target.value })
                        }
                        type="text"
                        name="month"
                        id="month"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // value=""
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="flex items-start justify-between mt-5">
                        <div className="relative">
                          <svg
                            className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 412 232"
                          >
                            <path
                              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                              fill="#648299"
                              fill-rule="nonzero"
                            />
                          </svg>
                          <select className="border text-sm font-semibold text-gray-900 border-gray-300 rounded h-10 pl-5 pr-10 bg-gray-50 appearance-none">
                            <option onClick={handleuserselection}>
                              User Type
                            </option>
                            <option onClick={handleuserselection}>Admin</option>
                            <option onClick={handleuserselection}>
                              Packaging
                            </option>
                            <option onClick={handleuserselection}>Rider</option>
                            <option onClick={handleuserselection}>
                              Finance
                            </option>
                            <option onClick={handleuserselection}>
                              Super Admin
                            </option>
                          </select>
                        </div>
                        {/* <Dropdown data={data} setData={setData} toast={toast} /> */}
                        <button className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 transform text-white font-bold py-2 px-4 rounded">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
