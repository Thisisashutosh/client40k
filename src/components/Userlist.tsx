"use client";
import React, { useEffect, useState } from "react";
import DeactivateOverlay from "./DeactivateOverlay";
import EditUserOverlay from "./EditUserOverlay";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Userlist = () => {
  const [showDeactivateOverlay, setShowDeactivateOverlay] = useState(false);
  const [showEditOverlay, setShowEditOverlay] = useState(false);
  const [data, setData] = useState([{}]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user/allusers");
        if (response.data.status === "error") {
          toast.error("Error fetching users");
        } else {
          //filtering the active users to show only the active users
          const activeUsers = response.data.filter(user => user.isActive);
          setData(activeUsers);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeactivatebuttonclick = (userId: any) => {
    setUserId(userId);
    setShowDeactivateOverlay(true);
  };
  const handleDeactivateCloseOverlay = () => {
    setShowDeactivateOverlay(false);
  };

  const handleEditbuttonclick = (userId: any) => {
    setUserId(userId);
    setShowEditOverlay(true);
  };

  const handleEditCloseOverlay = () => {
    setShowEditOverlay(false);
  };
  return (
    <>
      <Toaster />
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
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        User Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Address
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
                    {data.map((user) => (
                      <tr key={user.userId} className="hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {user.userType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {user.address}
                        </td>
                        <td className="px-6 py-4 flex items-center justify-center gap-3 text-end text-sm font-medium">
                          <button
                            type="button"
                            onClick={() => handleEditbuttonclick(user.userId)}
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleDeactivatebuttonclick(user.userId)
                            }
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Deactivate
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {showDeactivateOverlay && (
          <DeactivateOverlay
            handleCloseOverlay={handleDeactivateCloseOverlay}
            userId={userId}
          />
        )}
        {showEditOverlay && (
          <EditUserOverlay
            handleCloseOverlay={handleEditCloseOverlay}
            userId={userId}
          />
        )}
      </div>
    </>
  );
};

export default Userlist;
