import React from 'react'
import Sidebar from "@/components/Sidebar"

const Userlist = () => {
  return (
    <div className="flex justify-start">
      <Sidebar />
      <div className="w-[calc(100vw-16rem)] flex items-center justify-center">
        User list
      </div>
    </div>
  )
}

export default Userlist