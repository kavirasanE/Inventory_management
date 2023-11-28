import React, { useState } from 'react'
import { BsTextIndentLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword] =useState('');
 
  
  return (
      
    <div className='p-10 m-10 bg-white flex flex-col border-2 shadow-lg shadow-slate-900/50 rounded w-[500px] mx-auto '>
      <h1 className='text-center font-bold text-2xl'> Login</h1>
      <label className='my-4  font-bold text-2xl'> Email</label>
        <input 
          type='name'
          placeholder ='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border-2 border-red-900 px-2 py-2'
        />
        <label className='my-4 font-bold text-2xl'> Password</label>
        <input
        type='password'
        value={password}
        onChange={(e) => setPassword (e.target.value)}
        placeholder='Enter your Password'
        className='border-2 border-red-900 px-2 py-2'  />
        <Link to= '/Home' >
        <button className='m-8 p-3 w-[400px] mx-2 border-2 border-black bg-green-500 rounded-3xl  '>Login</button> 
        </Link>
        <button className='mx-2 text-center'>forget password?</button>   
        
      </div>
      
  )
}

export default Login
