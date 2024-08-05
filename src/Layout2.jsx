import React from 'react'
import Navbar from './Component/Dashboard/Navbar'
import { Outlet } from 'react-router-dom'
import Left from './Component/Dashboard/Left'
import Right from './Component/Dashboard/Right'

function Layout() {
  return (
    <>
      <Navbar/>
      <div className=' flex '>
      <Left/>
      <Outlet/>
      <Right/>
      </div>
      
    </>
  )
}

export default Layout
