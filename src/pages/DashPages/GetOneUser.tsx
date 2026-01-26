import { geteOneUserfn } from '@/Rudex/Slice/GetOneUser'
import type { AppDispatch, RootState } from '@/Rudex/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const GetOneUser=()=>{
    const GetOneUserState =useSelector((state :RootState)=> state.getonuser)
    const dispatch= useDispatch <AppDispatch>()

    const {id}=useParams()
        useEffect(() => { 
        dispatch(geteOneUserfn(id))
    } , [])
return(
    <div>
        <h2>
            name:
            {
                GetOneUserState.date.name
            }
        </h2>
        <h2>
            phone:
            {
                GetOneUserState.date.phone
            }
        </h2>
        <h2>
            email:
            {
                GetOneUserState.date.email
            }
        </h2>
        <h2>
            password:
            {
                GetOneUserState.date.password
            }
        </h2>
    </div>
)

}

export default GetOneUser




