"use client";
import React, { useState } from "react";
import ConfirmOverlay from "./ConfirmOverlay";

const Orders = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [confirmed, setConfirmed] = useState(false); //remember to remove this usestate approach and follow the database update approach because state variable will be set to default after refresh

  const handledeletebuttonclick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const handleconfirm = () => {
    setConfirmed(true);
    //now every order will get out for delivery, when orders api will be made and implemented, i have to make changes according to order Id.
  };
  const handleoutfordelivery = () => {};
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
                      Order ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Order date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Placed by
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Order amount
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
                      d1f3bh413d54bh
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      25 Feb 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      John Doe
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      69
                    </td>
                    <td className="px-6 py-4 flex items-center justify-center gap-3 text-end text-sm font-medium">
                      {!confirmed ? (
                        <button
                          type="button"
                          onClick={handleconfirm}
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Confirm
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleoutfordelivery}
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Out for delivery
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={handledeletebuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      d1f3bh413d54bh
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      25 Feb 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      John Doe
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      69
                    </td>
                    <td className="px-6 py-4 flex items-center justify-center gap-3 text-end text-sm font-medium">
                      {!confirmed ? (
                        <button
                          type="button"
                          onClick={handleconfirm}
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Confirm
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleoutfordelivery}
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Out for delivery
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={handledeletebuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      d1f3bh413d54bh
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      25 Feb 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      John Doe
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      69
                    </td>
                    <td className="px-6 py-4 flex items-center justify-center gap-3 text-end text-sm font-medium">
                      {!confirmed ? (
                        <button
                          type="button"
                          onClick={handleconfirm}
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Confirm
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleoutfordelivery}
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Out for delivery
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={handledeletebuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      d1f3bh413d54bh
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      25 Feb 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      John Doe
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      69
                    </td>
                    <td className="px-6 py-4 flex items-center justify-center gap-3 text-end text-sm font-medium">
                      {!confirmed ? (
                        <button
                          type="button"
                          onClick={handleconfirm}
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Confirm
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleoutfordelivery}
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Out for delivery
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={handledeletebuttonclick}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      d1f3bh413d54bh
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      25 Feb 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      John Doe
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      69
                    </td>
                    <td className="px-6 py-4 flex items-center justify-center gap-3 text-end text-sm font-medium">
                      {!confirmed ? (
                        <button
                          type="button"
                          onClick={handleconfirm}
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Confirm
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleoutfordelivery}
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Out for delivery
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={handledeletebuttonclick}
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
      {showOverlay && (
        <ConfirmOverlay handleCloseOverlay={handleCloseOverlay} />
      )}
    </div>
  );
};

export default Orders;
