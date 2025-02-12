import React from 'react'
import Header from '../static/Header'
import { Outlet } from "react-router-dom"
import DashHead from '../static/DashHead'

const Layout = () => {
  return (
    <div className='flex-col flex'>
      <Header/>
      <div className='px-6 flex-row flex justify-between w-full'>
        <DashHead/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout