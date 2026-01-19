

import React from 'react'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-gray-500 jos w-full h-full'>
        <h1 className='text-xl text-white font-bold text-center py-4'></h1>
<span className='uppercase text-gray-200 text-xs font-semibold'>menu</span>
        <ul className='mt-12 w-[90%] mx-auto flex flex-col gap-4'>
            <li className='flex gap-1 text-white justify-left items-center'  onClick={() => navigate('/dashboard')}>  Home</li>
            <li className='flex gap-1 text-white justify-left items-center' onClick={() => navigate('/dashboard/user')}>  Users</li>
            <li className='flex gap-1 text-white justify-left items-center'> <span><FaHome /></span> Class</li>
            <li className='flex gap-1 text-white justify-left items-center'> <span><FaHome /></span> Teacher</li>
           
        </ul>
    </div>
  )
}


export default Sidebar