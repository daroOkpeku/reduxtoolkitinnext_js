"use client"
import React,{useState} from 'react'
import {logIn, logOut} from "../redux/fetatures/auth-silce"
import { UseDispatch } from 'react-redux'
export default function Login() {
//  if you want to access the login or logout function from the reducer you have to use useDispatch
const [username, Setusername] = useState("")
// const dispatch = UseDispatch();

//   const handleClick =()=>{
//     dispatch(logIn(username))
//   }
  return (
    <div>
      
      <section className="w-full flex flex-col items-center">
        <div className='w-1/3'>
           <input type='text' value={username} onChange={(e)=>Setusername(e.target.value)} className='w-full p-2' />
        </div>

        <button className='w-32 rounded-sm bg-blue-600 text-white'onClick={handleClick} >submit</button>
      </section>
    </div>
  )
}
