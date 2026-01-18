import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../Rudex/store"
import { createUserfn } from "../../Rudex/Slice/pages/Dashboard/Users/NewUser"



const newUser = () => {
const[name, setName] = useState("")
const [phone, setPhone] = useState("")
const [email ,setEmail] = useState("")
const [password, setPassword] = useState("")

const userstate = useSelector((state:RootState) => state.newUser)
const dispatch = useDispatch<AppDispatch>()
 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

  const data={
    name,
    phone,
    email,
    password
  }

  dispatch(createUserfn(data))

    return (
        <div className='bg-gray-200 w-full h-[92vh] flex justify-center items-center'>
        <form className='w-[40%] bg-white h-[70vh] rounded-xl shadow-2xl' >
            <h2 className='text-md font-bold text-slate-800 font-serif  mt-4 text-center '>New Student Form </h2>

            <div className='flex flex-col gap-3 w-[85%] mx-auto mt-3'>
                <div className='grid gap-1'>
                    <label> Name</label>
                    <input type="text" placeholder='enter name here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <div className='grid gap-1'>
                    <label> Phone </label>
                    <input  type="text" placeholder='enter name here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <div className='grid gap-1'>
                    <label> Address</label>
                    <input   type="text" placeholder='enter name here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <div className='grid gap-1'>
                    <label> Age</label>
                    <input   type="text" placeholder='enter name here'  className='bg-gray-200 py-2 px-3 border rounded-sm' />
                </div>
                <button className='mt-4 bg-slate-900 text-white py-2 rounded-sm' type='submit'>Save</button>
            </div>
            

        </form>
    </div>
    )




}

}


export default newUser