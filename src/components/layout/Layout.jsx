import React from 'react'
import Header from '../static/Header'
import { Outlet } from "react-router-dom"
import DashHead from '../static/DashHead'

const Layout = () => {
  return (
    <div className='absolute'>
      <Header/>
      <div className='px-6 flex-row mt-24 flex w-full '>
        <DashHead/>
        <div className='ml-80'>
       <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout