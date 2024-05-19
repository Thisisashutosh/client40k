"use client";
import React, { useEffect, useState } from "react";
import Editoverlay from "@/components/Editoverlay";
import DeleteOverlay from "./DeleteOverlay";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "./Loading";
import NoData from "./NoData";

const Itemlist = () => {
  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);
  const [showEditOverlay, setShowEditOverlay] = useState(false);
  const [data, setData] = useState([{}]);
  const [productId, setProductId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8080/product/getallproducts"
        );
        if (response.data.status === "error") {
          toast.error("Error fetching products");
        } else {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeletebuttonclick = (productId: any) => {
    setProductId(productId);
    setShowDeleteOverlay(true);
  };
  const handleDeactivateCloseOverlay = () => {
    setShowDeleteOverlay(false);
  };

  const handleEditbuttonclick = (productId: any) => {
    setProductId(productId);
    setShowEditOverlay(true);
  };

  const handleEditCloseOverlay = () => {
    setShowEditOverlay(false);
  };
  return (
    <>
      {!data ? <div>
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
                      {data.map((product) => (
                        <tr className="hover:bg-gray-100 ">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {product.productId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {product.productName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {product.productType}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {product.productCode}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {product.productQuantity}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {product.productBatchId}
                          </td>
                          <td className="px-6 py-4 flex items-center justify-center gap-3 text-end text-sm font-medium">
                            <button
                              type="button"
                              onClick={() =>
                                handleEditbuttonclick(product.productId)
                              }
                              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                handleDeletebuttonclick(product.productId)
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
        {showDeleteOverlay && (
          <DeleteOverlay
            handleCloseOverlay={handleDeactivateCloseOverlay}
            productId={productId}
          />
        )}
        {showEditOverlay && (
          <Editoverlay
            handleCloseOverlay={handleEditCloseOverlay}
            productId={productId}
          />
        )}
      </div> : <NoData/>}
    </>
  );
};

export default Itemlist;
