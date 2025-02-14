import React, { useState } from 'react'
import { TbLayoutDashboardFilled,TbProgressHelp  } from "react-icons/tb"
import { MdDirectionsCarFilled,MdLightMode  } from "react-icons/md"
import { TfiBarChart } from "react-icons/tfi"
import { NavLink } from 'react-router-dom'
import { GiWallet } from "react-icons/gi"
import { BsChatSquareDots } from "react-icons/bs"
import { HiMiniCalendarDateRange } from "react-icons/hi2"
import { RiSettingsLine } from "react-icons/ri"

const DashHead = () => {
  const [active, setActive] = useState(0)
  return (
    <div className=' p-2 w-[20%] border-r-2 fixed'>
     {/* Top */}
     
     <div className=''>
     <h2 className='text-gray-600'>MAIN MENU</h2>
     <nav className='mt-[20px]'>
     <NavLink to={"/"}>
     <div onClick={()=>setActive(0)} className={`${active === 0 ? "bg-[#3563E9] text-white" : null} w-[250px] gap-4 flex flex-row cursor-pointer hover:bg-[#3563E9] hover:text-white p-3 rounded-xl`}>
        <TbLayoutDashboardFilled size={25} color={active === 0 ? "white" : "#3D5278"}/>
        <span className='text-[18px]'>Dashboard</span>
      </div>
     </NavLink>

     <NavLink to={"/car-rent"}>
      <div onClick={()=>setActive(1)} className={`${active === 1 ? "bg-[#3563E9] text-white" : null} w-[250px] my-[10px] gap-4 flex flex-row cursor-pointer hover:bg-[#3563E9] hover:text-white p-3 rounded-xl`}>
        <MdDirectionsCarFilled size={25} color={active === 1 ? "white" : "#3D5278"}/>
        <span className='text-[18px]'>Car Rent</span>
      </div>
      </NavLink>

      <NavLink to={"/insight"}>
      <div onClick={()=>setActive(2)} className={`${active === 2 ? "bg-[#3563E9] text-white" : null} w-[250px] my-[10px] gap-4 flex flex-row cursor-pointer hover:bg-[#3563E9] hover:text-white p-3 rounded-xl`}>
        <TfiBarChart size={25} color={active === 2 ? "white" : "#3D5278"}/>
        <span className='text-[18px]'>Insight</span>
      </div>
      </NavLink>
      <NavLink to={"/reimburse"}>
      <div onClick={()=>setActive(3)} className={`${active === 3 ? "bg-[#4563E9] text-white" : null} w-[250px] my-[10px] gap-4 flex flex-row cursor-pointer hover:bg-[#3563E9] hover:text-white p-3 rounded-xl`}>
        <GiWallet size={25} color={active === 3 ? "white" : "#3D5278"}/>
        <span className='text-[18px]'>Reimburse</span>
      </div>
      </NavLink>
      <NavLink to={"/inbox"}>
      <div onClick={()=>setActive(4)} className={`${active === 4 ? "bg-[#4563E9] text-white" : null} w-[250px] my-[10px] gap-4 flex flex-row cursor-pointer hover:bg-[#3563E9] hover:text-white p-3 rounded-xl`}>
        <BsChatSquareDots size={25} color={active === 4 ? "white" : "#3D5278"}/>
        <span className='text-[18px]'>Inbox</span>
      </div>
      </NavLink>

      <NavLink to={"/calender"}>
      <div onClick={()=>setActive(5)} className={`${active === 5 ? "bg-[#4563E9] text-white" : null} w-[250px] my-[10px] gap-4 flex flex-row cursor-pointer hover:bg-[#3563E9] hover:text-white p-3 rounded-xl`}>
        <HiMiniCalendarDateRange size={25} color={active === 5 ? "white" : "#3D5278"}/>
        <span className='text-[18px]'>Calender</span>
      </div>
      </NavLink>
     
     </nav>
     <h2 className='text-gray-600 mt-[30px]'>PREFERENCES</h2>
     <nav className='mt-[20px]'>
     <NavLink to={"/settings"}>
     <div onClick={()=>setActive(6)} className={`${active === 6 ? "bg-[#3563E9] text-white" : null} w-[250px] gap-4 flex flex-row cursor-pointer hover:bg-[#3563E9] hover:text-white p-3 rounded-xl`}>
        <RiSettingsLine size={25} color={active === 6 ? "white" : "#3D5278"}/>
        <span className='text-[18px]'>Settings</span>
      </div>
     </NavLink>
     <NavLink to={"/help-center"}>
     <div onClick={()=>setActive(7)} className={`${active === 7 ? "bg-[#3563E9] text-white" : null} w-[250px] mt-2 gap-4 flex flex-row cursor-pointer hover:bg-[#3563E9] hover:text-white p-3 rounded-xl`}>
        <TbProgressHelp size={25} color={active === 7 ? "white" : "#3D5278"}/>
        <span className='text-[18px]'>Help & Center</span>
      </div>
     </NavLink>
     </nav>
     </div>
    </div>
  )
}

export default DashHead