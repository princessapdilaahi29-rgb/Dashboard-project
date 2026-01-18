
import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Navs from './Navs'
const DashRouter = () => {


  return<div className='flex w-full h-screen'>
       <div className='w-[20%]'>
         <Sidebar />
       </div>
        <div className='w-full'>
            <Navs/>
            <Outlet />
        </div>
    </div>
}



export default DashRouter