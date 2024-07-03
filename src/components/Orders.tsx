"use client";
import React, { useEffect, useState } from "react";
import ConfirmOverlay from "./ConfirmOverlay";
import Loading from "./Loading";
import axios from "axios";
import toast from "react-hot-toast";
import ConfirmOrderOverlay from "./ConfirmOrderOverlay";
import ConfirmOfdOverlay from "./ConfirmOfdOverlay";
import NoData from "./NoData";

const Orders = () => {
  const [showConfirmOverlay, setShowConfirmOverlay] = useState(false);
  const [showOfdOverlay, setShowOfdOverlay] = useState(false);
  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8080/orders/gettodaysorders"
        );
        if (response.data.status === "error") {
          toast.error("Error fetching products");
        } else {
          setData(response.data.orders);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //overlay handlers for delete button
  const handledeletebuttonclick = (id: any) => {
    setOrderNumber(id);
    setShowDeleteOverlay(true);
  };
  const handledeletecloseoverlay = () => {
    setShowDeleteOverlay(false);
  };

  //overlay handlers for confirm button
  const handleconfirmbuttonclick = (id: any) => {
    setOrderNumber(id);
    setShowConfirmOverlay(true);
  };
  const handleconfirmcloseoverlay = () => {
    setShowConfirmOverlay(false);
  };

  //overlay handlers for out for delivery button
  const handleofdbuttonclick = (id: any) => {
    setOrderNumber(id);
    setShowOfdOverlay(true);
  };
  const handleofdcloseoverlay = () => {
    setShowOfdOverlay(false);
  };

  return (
    <>
      {data.length != 0 ? <div>
        <div className="flex flex-col">
          <div className=" overflow-x-auto ">
            <div className="p-1.5 md:w-[calc(100vw-16rem)] h-screen inline-block align-middle">
              {!loading ? (
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
                      {data.map((order:any) => (
                        <tr className="hover:bg-gray-100 ">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {order.orderNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            {order.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            John Doe
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            69
                          </td>
                          <td className="px-6 py-4 flex items-center justify-center gap-3 text-end text-sm font-medium">
                            {order.status === "pending" ? (
                              <button
                                type="button"
                                onClick={() =>
                                  handleconfirmbuttonclick(order.orderNumber)
                                }
                                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                              >
                                Confirm
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={() =>
                                  handleofdbuttonclick(order.orderNumber)
                                }
                                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                              >
                                Out for delivery
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() =>
                                handledeletebuttonclick(order.orderNumber)
                              }
                              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
        {showConfirmOverlay && (
          <ConfirmOrderOverlay
            handleCloseOverlay={handleconfirmcloseoverlay}
            orderNumber={orderNumber}
          />
        )}
        {showOfdOverlay && (
          <ConfirmOfdOverlay
            handleCloseOverlay={handleofdcloseoverlay}
            orderNumber={orderNumber}
          />
        )}
        {showDeleteOverlay && (
          <ConfirmOverlay
            handleCloseOverlay={handledeletecloseoverlay}
            orderNumber={orderNumber}
          />
        )}
      </div> : <NoData/>}
    </>
  );
};

export default Orders;
