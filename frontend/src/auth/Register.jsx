import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Register = () => {
  const [username,setUsername] =useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword] =useState('');
  const navigate = useNavigate();

  const data ={
    username,
    email,
    password
  }

  const handleSubmit =(e) => {
       e.preventDefault()
       axios.post ('http://localhost:5000/list', data)
       .then ( ()=>{
        navigate ('/Login');
})
.catch(err =>
  console.log(err)
)

  }
  return (
      
    <div className='p-10 m-10 bg-white flex flex-col border-2 shadow-lg shadow-slate-900/50 rounded w-[500px] mx-auto '>
      <h1 className='text-center font-bold text-2xl'> Register</h1>
      <label className='my-4  font-bold text-2xl'> Username</label>
        <input 
          type='name'
          placeholder ='Enter your username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='border-2 border-red-900 px-2 py-2'
        />
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
        <button className='m-8 p-3 w-[400px] mx-2 border-2 border-black bg-green-500 rounded-3xl ' onClick={handleSubmit}>Login</button> 
        <button className='mx-2 text-center'>Already having an account?</button>   
        
      </div>
      
  )
}

export default Register
