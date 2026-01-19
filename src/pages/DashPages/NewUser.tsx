import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../Rudex/store'
import { useNavigate } from 'react-router-dom'
import { createUserfn } from '@/Rudex/Slice/pages/Dashboard/Users/NewUser'
import { toast } from 'react-hot-toast'






const NewUser = () => {

  const[name, setName] = useState("")
  const[phone, setPhone] = useState("")
  const[password, setPassword] = useState("")
  const[email, setEmail] = useState("")
    const toastId = 'NewUser';
  const Usersstate=useSelector((state: RootState) => state.newUser)

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit =(e:React.FormEvent)=>{
    e.preventDefault();
  }
  const date={
    name,
    phone,
    password,
    email
  }

  dispatch(createUserfn(date))
   
const Navigate=useNavigate()

useEffect(
    ()=>{

if(Usersstate.isLoading){
     toast.loading('Loading..' , { id : toastId})
}
if(Usersstate.isSuccess){
     toast.success('User Created Successfully', { id : toastId})
}
if(Usersstate.isError){
     toast.error('Error Creating User', { id : toastId})
}
   


    },

   [Usersstate]
)

  return (
    <div className='bg-gray-200 w-full h-[92vh] flex justify-center items-center'>
        <form className='w-[40%] bg-white h-[70vh] rounded-xl shadow-2xl' >
            <h2 className='text-md font-bold text-slate-800 font-serif  mt-4 text-center '>New User Form </h2>

            <div className='flex flex-col gap-3 w-[85%] mx-auto mt-3'>
                <div className='grid gap-1'>
                    <label> Name</label>
                    <input    type="text" placeholder='enter name here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <div className='grid gap-1'>
                    <label> Phone </label>
                    <input  type="text" placeholder='enter phone here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <div className='grid gap-1'>
                    <label> password</label>
                    <input  type="text" placeholder='enter password here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <div className='grid gap-1'>
                    <label> email</label>
                    <input  type="text" placeholder='enter email here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <button className='mt-4 bg-slate-900 text-white py-2 rounded-sm' type='submit'>Save</button>
            </div>
            

        </form>
    </div>
  )
}

export default NewUser