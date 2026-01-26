import  { useEffect } from 'react'
import type { AppDispatch, RootState } from '../../Rudex/store'
import { useDispatch, useSelector } from 'react-redux'
import { getallusersfn } from '../../Rudex/Slice/pages/Dashboard/Users/AllUser'
import { useNavigate } from 'react-router-dom'
import { BsThreeDots } from "react-icons/bs";
import { deletingUserfn } from '@/Rudex/Slice/pages/Dashboard/Users/DeleteUser'
import toast from 'react-hot-toast'
import { absent_userfn } from '@/Rudex/Slice/pages/Dashboard/Users/absentUser'
import { Button } from '@/components/ui/button'

const Users = () => {

    const allUsersState = useSelector((state: RootState) => state.allUsers)
        const toastId = 'User'
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
       dispatch(getallusersfn())


    } , [])

    // const users = allUsersState?.data
    const navigate = useNavigate()

// DELETE

const absentUserState = useSelector((state : RootState) => state.absent)


const handleabsent = (id : any) => {
        dispatch(absent_userfn(id))
    } 
    useEffect(() => {
        if(absentUserState.isloading){
            toast.loading('Loading..' , { id  : toastId})
        }
        if(absentUserState.isssucess){
            toast.success("Student Deleted Successfully" , { id : toastId})
            dispatch(getallusersfn())
        }
        if(absentUserState.iserror){
            toast.error(absentUserState.message , {id : toastId})
        }
    } , [absentUserState])

   

     return (
    <div>


     <div className='my-4 flex justify-end mx-2'>
            <button className='bg-pink-600 text-white py-2 px-4 text-sm font-semibold' onClick={() => navigate("/dashboard/user/new")}>NewUser</button>
        </div>
        <table className='w-full border'>
            <thead>
        
  
                <th>id</th>
                <th>name</th>
                <th>phone</th>
                <th>email</th>
                <th>password</th>
                <th><BsThreeDots /></th>
                <th><button></button></th>
                
               
            </thead>
            <tbody>
               
                {allUsersState.data.map((items , idx) => (
                    <tr key={idx}>
                        <td>{items.id}</td>
                        <td>{items.name}</td> 
                        <td>{items.phone}</td> 
                        <td>{items.email}</td> 
                        <td>{items.password}</td> 
                        <td>
                          <Button className='my-2'onClick={() => handleabsent(items.id)}>Absent</Button>
                        </td>
                          <td>
                            <Button    onClick={() => navigate(`/dashboard/user/one/${items.id}`)}>Get One</Button>
                        </td> 
                        
                         <td>
                            <Button  onClick={() => navigate(`/dashboard/user/Apdate/${items.id}`)} >Update</Button>
                        </td> 
                        {
                      
                    }
                     
                       
                        
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}
export default Users


