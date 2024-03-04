"use client";
import React, { useState } from "react";
import Editoverlay from "@/components/Editoverlay";
import DeleteOverlay from "./DeleteOverlay";

const Itemlist = () => {
  const [showDeactivateOverlay, setShowDeactivateOverlay] = useState(false);
  const [showEditOverlay, setShowEditOverlay] = useState(false);

  const handleDeactivatebuttonclick = () => {
    setShowDeactivateOverlay(true);
  };
  const handleDeactivateCloseOverlay = () => {
    setShowDeactivateOverlay(false);
  };

  const handleEditbuttonclick = () => {
    setShowEditOverlay(true);
  };

  const handleEditCloseOverlay = () => {
    setShowEditOverlay(false);
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className=" overflow-x-auto ">
          <div className="p-1.5 md:w-[calc(100vw-16rem)] h-screen inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Product ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Product Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Product Code
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Batch ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      AD7847DDK685DF{" "}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Dettol
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Anticeptic
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      AGUJH7843UHKgd
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      69
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      FBNHN74643FNLK
                    </td>
                    <td className="px-6 py-4 flex items-center justify-center gap-3 text-end text-sm font-medium">
                      <button
                        type="button"
                        onClick={handleEditbuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={handleDeactivatebuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      AD7847DDK685DF{" "}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Dettol
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Anticeptic
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      AGUJH7843UHKgd
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      69
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      FBNHN74643FNLK
                    </td>
                    <td className="px-6 py-4 flex items-center justify-center gap-3 text-end text-sm font-medium">
                      <button
                        type="button"
                        onClick={handleEditbuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={handleDeactivatebuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      AD7847DDK685DF{" "}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Dettol
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Anticeptic
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      AGUJH7843UHKgd
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      69
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      FBNHN74643FNLK
                    </td>
                    <td className="px-6 py-4 flex items-center justify-center gap-3 text-end text-sm font-medium">
                      <button
                        type="button"
                        onClick={handleEditbuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={handleDeactivatebuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      AD7847DDK685DF{" "}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Dettol
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Anticeptic
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      AGUJH7843UHKgd
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      69
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      FBNHN74643FNLK
                    </td>
                    <td className="px-6 py-4 flex items-center justify-center gap-3 text-end text-sm font-medium">
                      <button
                        type="button"
                        onClick={handleEditbuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={handleDeactivatebuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      AD7847DDK685DF{" "}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Dettol
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Anticeptic
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      AGUJH7843UHKgd
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      69
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      FBNHN74643FNLK
                    </td>
                    <td className="px-6 py-4 flex items-center justify-center gap-3 text-end text-sm font-medium">
                      <button
                        type="button"
                        onClick={handleEditbuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={handleDeactivatebuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showDeactivateOverlay && <DeleteOverlay handleCloseOverlay={handleDeactivateCloseOverlay} />}
      {showEditOverlay && <Editoverlay handleCloseOverlay={handleEditCloseOverlay} />}
    </div>
  );
};

export default Itemlist;
