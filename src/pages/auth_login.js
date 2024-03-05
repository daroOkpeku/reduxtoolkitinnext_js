"use client"
import React,{useState} from 'react'
import {logIn, logOut} from "../redux/fetatures/auth-silce"
import { useDispatch, useSelector } from 'react-redux';
export default function Auth_login() {
    //  if you want to access the login or logout function from the reducer you have to use useDispatch
 const [username, Setusername] = useState("")
    let dispatch = useDispatch();
    let usernamex = useSelector((state)=> state.authReducer.value.username)
  const handleClick =()=>{
    dispatch(logIn(username))
  }

  const handleLogout = ()=>{
    dispatch(logOut())
  }
    return (
        <div className='w-full'>
            hello {usernamex}
      <section className="w-full flex flex-col items-center">
        <div className='w-1/3'>
           <input type='text' value={username} onChange={(e)=>Setusername(e.target.value)} placeholder="name" className='w-full p-2' />
        </div>

        <button className='w-32 rounded-sm bg-blue-600 text-white'onClick={handleClick} >submit</button>
        <button className='w-32 rounded-sm bg-blue-600 text-white'onClick={handleLogout} >logout</button>
      </section>
        </div>
    )
}
