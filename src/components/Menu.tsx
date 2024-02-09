"use client";

import React, { useState } from "react";
import Link from "next/link";

const links = [
  { id: 1, title: "Dashboard", url: "/" },
  { id: 2, title: "Create User", url: "/createuser" },
  { id: 3, title: "User List", url: "/userlist" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const user = false;
  return (
    <div className="">
      {open ? (
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setOpen(false)}
          className="absolute top-0 left-0"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      ) : (
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setOpen(true)}
        //   className="absolute top-0 right-0"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 7L7 7M20 7L11 7"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M20 17H17M4 17L13 17"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M4 12H7L20 12"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      )}
      {open && (
        <div className="bg-gray-100 text-black right-0 top-24 w-screen h-screen flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
