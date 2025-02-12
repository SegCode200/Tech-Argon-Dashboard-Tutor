import React from 'react'
import { TbLayoutDashboardFilled } from "react-icons/tb"
import { MdDirectionsCarFilled } from "react-icons/md"
import { NavLink } from 'react-router-dom'
const DashHead = () => {
  return (
    <div className='p-2 w-[20%] border-r-2 h-[80vh] '>
     {/* Top */}
     <h2 className='text-gray-600'>MAIN MENU</h2>
     <nav className='mt-[20px]'>
     <NavLink to={"/"}>
     <div className='w-[250px] gap-4 flex flex-row cursor-pointer hover:bg-[#3563E9] hover:text-white p-3 rounded-xl'>
        <TbLayoutDashboardFilled size={25} color='#3D5278'/>
        <span className='text-[18px]'>Dashboard</span>
      </div>
     </NavLink>

     <NavLink to={"/car-rent"}>
      <div className='w-[250px] my-[10px] gap-4 flex flex-row cursor-pointer hover:bg-[#3563E9] hover:text-white p-3 rounded-xl'>
        <MdDirectionsCarFilled size={25} color='#3D5278'/>
        <span className='text-[18px]'>Car Rent</span>
      </div>
      </NavLink>
     </nav>
    </div>
  )
}

export default DashHead