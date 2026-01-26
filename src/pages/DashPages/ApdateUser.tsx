
import { creatingApateUserfn } from '@/Rudex/Slice/pages/Dashboard/Users/ApdateUser'
import type { AppDispatch, RootState } from '@/Rudex/store'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
    const UpdateUserState = useSelector((state : RootState) => state.ApdateUser)
        const [name  , setName ] = useState("")
        const [password  , setPassword ] = useState("")
        const [phone  , setPhone ] = useState("")
        const [email  , setEmail ] = useState("")
        const dispatch = useDispatch<AppDispatch>()

        const { id } = useParams()

        const handleUpdate = (e : React.FormEvent) => {
            e.preventDefault()

            const data = {
                id,
              name,
            password,
            email,
            phone
               
            }
            dispatch(creatingApateUserfn(data))
            
        }
  return (
    <div className='flex justify-center items-center w-full h-[92vh]'>
        <form className='w-[40%] mx-auto h-[70vh] bg-green-100' onSubmit={handleUpdate}>
            <div className='flex flex-col gap-3 w-[85%] mx-auto mt-3'>
                <div className='grid gap-1'>
                    <label> Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='enter name here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <div className='grid gap-1'>
                    <label> Phone </label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder='enter name here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <div className='grid gap-1'>
                    <label> Address</label>
                    <input  value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='enter name here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <div className='grid gap-1'>
                    <label> Age</label>
                    <input  value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='enter name here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <button className='mt-4 bg-slate-900 text-white py-2 rounded-sm' type='submit'>Save</button>
            </div>
            
        </form>
    </div>
  )
}

export default UpdateUser





