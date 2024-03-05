"use client"
import React,{useState} from 'react'
import {logIn, logOut} from "../redux/fetatures/auth-silce"
import { useDispatch, useSelector } from 'react-redux';
 import {  useAuthenticateUserMutation  } from '@/api/apitest';
export default function Auth_login() {
    //  if you want to access the login or logout function from the reducer you have to use useDispatch
 const [username, Setusername] = useState("")
 const [password, Setpassword] = useState("")
    let dispatch = useDispatch();
    let usernamex = useSelector((state)=> state.authReducer.value.email)
    let passx  = useSelector((state)=> state.authReducer.value.password)
    // const { data, error, isLoading } = useGetDataQuery();
    const [postData, { isLoading: isPosting }] = useAuthenticateUserMutation ();
//   console.log(data, error, isLoading)
  const handleClick = async()=>{
    let objs = {email:username, password:password}
    dispatch(logIn(objs))
   let res = await postData(objs)
   console.log(res)
  }

  const handleLogout = ()=>{
    dispatch(logOut())
  }
    return (
        <div className='w-full'>
            hello {usernamex} {passx}
      <section className="w-full flex flex-col items-center">
        <div className='w-1/3'>
           <input type='text' value={username} onChange={(e)=>Setusername(e.target.value)} placeholder="name" className='w-full p-2' />
           <input type='text' value={password} onChange={(e)=>Setpassword(e.target.value)} placeholder="password" className='w-full p-2' />

        </div>

        <button className='w-32 rounded-sm bg-blue-600 text-white'onClick={handleClick} >submit</button>
        <button className='w-32 rounded-sm bg-blue-600 text-white mt-3'onClick={handleLogout} >logout</button>
      </section>
        </div>
    )
}
