import React from 'react'
import { IoSearch,IoFilter } from "react-icons/io5"
import { FaHeart } from "react-icons/fa"; 
import { IoIosNotifications } from "react-icons/io"
import { IoIosSettings } from "react-icons/io"
import pics from "../../assets/FineGirl.jpg"

const Header = () => {
  return (
    <div className='flex-row flex justify-center items-center w-full p-6 border-b h-[100px]'>
     <div className='w-[90%] flex-row flex justify-between items-center'>

      <div className='flex-row flex items-center'>
        {/* Logo */}
        <span className='text-[#3563E9] font-semibold text-[30px] mr-[90px]'>MORENT</span>
        <div className='flex-row flex items-center border p-2 rounded-3xl'>
          <IoSearch size={24} className='text-black' />
          <input className='flex-1 mx-3 w-[300px] focus:outline-none' placeholder='Search something' />
          <IoFilter size={24} className='text-black' />
        </div>
      </div>

    {/* Profile Settings */}
      <div className='flex-row items-center flex gap-4'>
        <div className='border s rounded-full p-2'>
        <FaHeart size={22} color='#3D5278'/>
        </div>
        <div className='border s rounded-full p-2'>
        <IoIosNotifications  size={24} color='#3D5278'/>
        </div>
        <div className='border s rounded-full p-2'>
        <IoIosSettings  size={24} color='#3D5278'/>
        </div>
        <div>
          <img src={pics} alt='Profile Pic' className='rounded-full w-7 h-7' />
        </div>
      </div>

     </div>

    </div>
  )
}

export default Header