"use client"
import React, { useState } from "react";
import DeactivateOverlay from "./DeactivateOverlay";
import EditoUserOerlay from "./EditUserOverlay";

const Userlist = () => {
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
                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      John Brown
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      Admin
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      New York No. 1 Lake Park
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
                        Deactivate
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Jim Green
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      Super Admin
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      London No. 1 Lake Park
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
                        Deactivate
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Joe Black
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      Packaging
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      Sidney No. 1 Lake Park
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
                        Deactivate
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Edward King
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      Rider
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      LA No. 1 Lake Park
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
                        Deactivate
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Jim Red
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      Finance
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      Melbourne No. 1 Lake Park
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
                        Deactivate
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showDeactivateOverlay && <DeactivateOverlay handleCloseOverlay={handleDeactivateCloseOverlay} />}
      {showEditOverlay && <EditoUserOerlay handleCloseOverlay={handleEditCloseOverlay} />}
    </div>
  );
};

export default Userlist;
