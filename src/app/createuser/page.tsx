import React from 'react'
import Sidebar from "@/components/Sidebar"
import Menu from '@/components/Menu'
import Form from '@/components/Form'

const Createuser = () => {
  return (
    <div className="flex justify-start">
      <div className="fixed hidden md:block">
        <Sidebar />
      </div>
      <div className="fixed block md:hidden z-50">
        <Menu/>
      </div>
      <div className="w-full h-screen md:w-[calc(100vw-16rem)] p-4 mt-5 md:mt-0 md:ml-64 flex flex-col items-center justify-center">
       <Form/>
      </div>
    </div>
  )
}

export default Createuser