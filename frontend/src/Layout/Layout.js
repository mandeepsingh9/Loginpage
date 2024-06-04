import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const Layout = () => {
  return (
    <div className='flex flex-col  bg-zinc-900 text-white h-screen justify-between'>
        <Navbar/>
         {<Outlet/>}
        <Footer/>
    </div>
  )
}

export default Layout