import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowDevice = () => {
  const [loading,setLoading] = useState(false);
  const [device,setDevice] =useState({});
  const { id } =useParams();
  useEffect ( () => {
     setLoading(true);
     axios
     .get(`http://localhost:5000/device/${id}`)
     .then ((res) => {
            setDevice(res.data);
            setLoading(false);
     })
     .catch((error) => {
      console.log(error);
      setLoading(false);
     })
  },[])
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-4xl'>Device Details </h1>
      {loading ? (
          <Spinner/>
        ) :(
    <div className='flex flex-col border-2 border-blue-600 rounded-xl w-fit p-4'>
      <div className='my-4'>
        <span className='text-xl mr-4 text-red-500'>  ID</span>
        <span>{device._id}</span>
         </div>
         <div className='my-4'>
        <span className='text-xl mr-4 text-red-500'>  Name</span>
        <span>{device.title}</span>
         </div>
         <div className='my-4'>
        <span className='text-xl mr-4 text-red-500'>  DeviceName</span>
        <span>{device.DeviceName}</span>
         </div>
         <div className='my-4'>
        <span className='text-xl mr-4 text-red-500'> DSN</span>
        <span>{device.DSN}</span>
         </div>
         <div className='my-4'>
        <span className='text-xl mr-4 text-red-500'> TimeStamp </span>
        <span>{new  Date (device.createdAt).toString()} {new Date (device.updateAt).toString()}</span>
         </div>
    </div>
    )}
    </div>
  )
}

export default ShowDevice;
