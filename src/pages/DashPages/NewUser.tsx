import { createUserfn } from "../../Rudex/Slice/pages/Dashboard/Users/NewUser"
import type { AppDispatch, RootState } from "@/Rudex/store"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



const NewUser = () => {
    const [name,setName]= useState("")
const [phone ,setPhone]=useState("")
const[password,setPassword]=useState("")
const [email,setEmail] =useState("")
const UserState = useSelector((state : RootState) => state.newUser)
 const dispatch = useDispatch<AppDispatch>()
  const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()

        const data = {
         name,
         phone,
         password,
         email
        }
        dispatch(createUserfn(data))
}
const navigate = useNavigate()
    return (
         <div className='bg-gray-200 w-full h-[92vh] flex justify-center items-center'>
        <form className='w-[40%] bg-white h-[70vh] rounded-xl shadow-2xl' onSubmit={handleSubmit} >
            <h2 className='text-md font-bold text-slate-800 font-serif  mt-4 text-center '>New user Form </h2>

            <div className='flex flex-col gap-3 w-[85%] mx-auto mt-3'>
                <div className='grid gap-1'>
                    <label> Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)}type="text" placeholder='enter name here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <div className='grid gap-1'>
                    <label> Phone </label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)}type="text" placeholder='enter name here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <div className='grid gap-1'>
                    <label> password</label>
                    <input  value={password} onChange={(e) => setPassword(e.target.value)}  type="text" placeholder='enter name here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <div className='grid gap-1'>
                    <label> email</label>
                    <input  value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='enter name here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <button className='mt-4 bg-slate-900 text-white py-2 rounded-sm' type='submit'>Save</button>
            </div>
            

        </form>
    </div>
  )
}
export default NewUser