import React, { use, useEffect } from 'react'
import type { AppDispatch, RootState } from '../../Rudex/store'
import { useDispatch, useSelector } from 'react-redux'
import { getallusersfn } from '../../Rudex/Slice/pages/Dashboard/Users/AllUser'
import { useNavigate } from 'react-router-dom'


const Users = () => {

    const allUsersState = useSelector((state: RootState) => state.allUsers)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
       dispatch(getallusersfn())


    } , [])

    // const users = allUsersState?.data
    const navigate = useNavigate()



    
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
                
            </thead>
            <tbody>
               
                {allUsersState.data.map((items , idx) => (
                    <tr key={idx}>
                        <td>{items.id}</td>
                        <td>{items.name}</td> 
                        <td>{items.phone}</td> 
                        <td>{items.email}</td> 
                        <td>{items.password}</td> 
                     
                       
                        
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}
export default Users


