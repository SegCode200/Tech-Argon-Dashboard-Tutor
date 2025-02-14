import React from 'react'
import pics from "../assets/Maps.png"
import pics1 from "../assets/Look.png"
import car1 from "../assets/car-1.png"
import car2 from "../assets/car-2.png"
import car3 from "../assets/car-3.png"
import car4 from "../assets/car.png"
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiDotsThreeOutlineBold } from "react-icons/pi"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const HomeScreen = () => {
  const datas = [
    {name: "Nissan GT - R", type: "Sport Car", picture: car4, price: 80.0, date: "19 July"},
    {name: "Koegnigsegg", type: "Sport Car", picture: car1, price: 99.00, date: "20 July"},
    {name: "Rolls - Royce", type: "Sport Car", picture: car2, price: 96.00, date: "17 July"},
    {name: "CR - V", type: "SUV", picture: car3, price: 80.0, date: "10 July"}
  ]
  const data = {
 
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(166, 206, 242)',
        'rgb(99, 169, 232)',
        'rgb(33, 133, 222)'
      ],
      hoverOffset: 4
    }]
  };
  return (
    <div className='p-8 flex  w-full'>
      {/* Details Rental */}
      <div className=' bg-white w-[700px] shadow-2xl p-5 rounded-lg '>
      <h1 className='text-[20px] font-semibold'>Details Rental</h1>
      <div className='mt-3'>
        <img src={pics}/>
      </div>

      <div className='mt-6 flex-row flex items-center justify-between'>
      <div className='flex  w-full items-center '>
      <div>
        <img src={pics1}/>
      </div>
      <div className='flex flex-col ml-4'>
        <span className='text-[19px] font-semibold'>Nissan GT - R</span>
        <span className='text-[14px]'>Sport Car</span>
      </div>
     
      </div>
      <span className='font-normal text-[13px] italic'>#9761</span>
      </div>

    <div className='mt-[20px]'>
      {/* Pick Up  */}
      <div className='flex-row flex items-center gap-2'>
        <input type="checkbox"/>
        <span>Pick-up</span>
      </div>
      <div className='flex justify-between'>
        <div className='border-r-2 flex flex-col p-2 '>
          <span>Locations</span>
          <span className='text-gray-600 flex items-center'>Kota Semarang
            <MdKeyboardArrowDown size={20} className='ml-2'/>
          </span>
        </div>
        <div className='border-r-2 flex flex-col p-2 '>
          <span>Date</span>
          <span className='text-gray-600 flex items-center'>March 24 2025
            <MdKeyboardArrowDown size={20} className='ml-2'/>
          </span>
        </div>
        <div className=' flex flex-col border-r-2 p-2 '>
          <span>Time</span>
          <span className='text-gray-600 flex items-center'>07:00
            <MdKeyboardArrowDown size={20} className='ml-2'/>
          </span>
        </div>
      </div>
    </div>

    <div className='mt-[20px]'>
      {/* Pick Up  */}
      <div className='flex-row flex items-center gap-2'>
        <input type="checkbox"/>
        <span>Drop-Off</span>
      </div>
      <div className='flex justify-between'>
        <div className='border-r-2 flex flex-col p-2 '>
          <span>Locations</span>
          <span className='text-gray-600 flex items-center'>Kota Semarang
            <MdKeyboardArrowDown size={20} className='ml-2'/>
          </span>
        </div>
        <div className='border-r-2 flex flex-col p-2 '>
          <span>Date</span>
          <span className='text-gray-600 flex items-center'>March 24 2025
            <MdKeyboardArrowDown size={20} className='ml-2'/>
          </span>
        </div>
        <div className=' flex flex-col border-r-2 p-2 '>
          <span>Time</span>
          <span className='text-gray-600 flex items-center'>07:00
            <MdKeyboardArrowDown size={20} className='ml-2'/>
          </span>
        </div>
      </div>
    </div>
    <div className='flex flex-row items-center justify-between mt-[20px]'>
      <div className='flex flex-col'>
      <span className='text-[18px] font-bold'>Total Rental Price</span>
      <span className=' text-[13px] text-gray-400'>Overall price and includes rental discount</span>
      </div>
      <span className='text-[20px]  font-black'>$80.0</span>
    </div>
      </div>
      {/* Right Side of the HomeScreen */}
      <div className='ml-7 w-[90%]'>
        {/* Top part */}
      <div className='bg-white flex flex-col shadow-xl p-5  rounded-lg'>
        <div className='flex flex-col justify-between w-s h-auto items-center'>
          <div className='w-full justify-between flex flex-row '>
          <span className='text-[18px] font-semibold'>Top 5 Car Rental </span>
          <PiDotsThreeOutlineBold size={18} color='black'/>
          </div>
          <div className='flex flex-row w-full'>
        <div className='flex-1 w-[200px] h-[200px]'>
        <Doughnut data={data} />
        </div>
     <div className='gap-2 flex flex-col '>
     <div className='flex flex-row'>
          <div className='flex flex-row items-center gap-2'>
            <div className='w-3 h-3 bg-slate-600 rounded-full'/>
          <span>Sport Car</span>
          </div>
          <span className='ml-8'>17,439</span>
        </div>
        <div className='flex flex-row items-center justify-between gap-2'>
         <div className='flex flex-row items-center gap-2'>
         <div className='w-3 h-3 bg-blue-400 rounded-full'/>
         <span>SUV</span>
         </div> 
          <span className='ml-8'>17,439</span>
        </div>
        <div className='flex flex-row items-center justify-between gap-2'>
         <div className='flex flex-row items-center gap-2'>
         <div className='w-3 h-3 bg-blue-400 rounded-full'/>
         <span>SUV</span>
         </div>
          <span className='ml-8'>17,439</span>
        </div>
        <div className='flex flex-row items-center justify-between gap-2'>
         <div className='flex flex-row items-center gap-2'>
         <div className='w-3 h-3 bg-blue-400 rounded-full'/>
         <span>SUV</span>
         </div>
          <span className='ml-8'>17,439</span>
        </div>
        <div className='flex flex-row items-center justify-between gap-2'>
         <div className='flex flex-row items-center gap-2'>
         <div className='w-3 h-3 bg-blue-400 rounded-full'/>
         <span>SUV</span>
         </div>
          <span className='ml-8'>17,439</span>
        </div>
        <div className='flex flex-row items-center justify-between gap-2'>
         <div className='flex flex-row items-center gap-2'>
         <div className='w-3 h-3 bg-blue-400 rounded-full'/>
         <span>SUV</span>
         </div>
          <span className='ml-8'>17,439</span>
        </div>
     </div>

        </div>
          
        </div>

       

      </div>


      {/* Bottom part  */}
      <div className='bg-white p-5 mt-[20px] shadow-xl rounded-lg'>
        <div className='flex flex-row items-center justify-between'>
        <h1 className='font-bold text-[18px]'>Recent Transactions</h1>
        <h1 className=' text-[13px] text-blue-500'>View All</h1>
        </div>
        <div className='gap-2 flex flex-col'>
        {
          datas.map((items)=>(
            <div className='mt-6 flex-row flex items-center justify-between border-b-2 py-4'>
            <div className='flex  w-full items-center '>
            <div>
              <img src={items.picture}/>
            </div>
            <div className='flex flex-col ml-4'>
              <span className='text-[19px] font-semibold'>{items.name}</span>
              <span className='text-[14px]'>{items.type}</span>
            </div>
           
            </div>
            <div className='flex flex-col flex-1 '>
            <span className='font-normal text-[13px] '>{items.date}</span>
            <span className='font-normal text-[13px] '>${items.price}</span>
            </div>
            </div>
          ))
        }
        </div>
      </div>

      </div>
    </div>
  )
}

export default HomeScreen