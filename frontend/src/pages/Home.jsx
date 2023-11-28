import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';


const Home = () => {
  const [loading,setLoading] =useState(false);
  const[device,setDevice] =useState([]);
  const [search,setSearch]= useState('');
  useEffect ( () => {
    setLoading(true);
    axios
    .get('http://localhost:5000/device')
    .then ((res) => {
       setDevice(res.data.data);
       setLoading(false);
    })
    .catch ((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []);
  return (
    <div className='font-bold  '>
      <div className='flex h-35px p-4 border-2 shadow-sm border-gray justify-between items-center'>
        <h1 className='text-3xl my-2 font-bold text-black'>Integrated Device Management</h1>
        <input className='w-50 h-8 p-2 rounded justify-center align-center border-black border-2 '
        type='name'
        value={search}
        placeholder='search for the device'
        onChange= {(e) => {setSearch (e.target.value)}}
         />
        <Link to='/device/create'>
          <button className='border-2 bg-yellow-200 p-2 mx-5 border-black'>Check In</button>
         </Link>
         <Link to='/Login'>
          <button className='border-2 bg-red-300 rounded-xl p-2 mx-5 border-black'>Log out</button>
         </Link>
      </div>
      {loading ? ( 
        <Spinner/>
      ):(
        <table className='w-full border-seperate border-spacing-2 my-8'>
          <thead>
              <tr >
                <th className='border border-red-600 rounded-2xl  '> No </th>
                <th className='border border-red-600 rounded-2xl  '> Name </th>
                <th className='border border-red-600 rounded-2xl  '> Device </th>
                <th className='border border-red-600 rounded-2xl  '> DSN </th>
                <th className='border border-red-600 rounded-2xl  '> Options </th>
              </tr>
          </thead>
          <tbody>
             {device.map ((device ,index) => ( 
              <tr key={device._id} className='h-8'>
                 <td className='border border-red-600 rounded-sm text-center'>
                  {index+1}
                 </td>
                <td className='border border-red-600 rounded-sm text-center'>{device.title}</td>
                <td className='border border-red-600 rounded-sm text-center'>{device.DeviceName}</td>
                <td className='border border-red-600 rounded-sm text-center'>{device.DSN}</td>
                <td className='border border-red-600 rounded-sm text-center'>
                  <div className='flex justify-center gap-x-4'>
                  <Link to={ `/device/show/${device._id}`}>
                    <button className='bg-orange-600 border-2 border-stone-950 p-2 '>Details</button>
                  </Link>
                  <Link to={ `/device/edit/${device._id}`}>
                  <button className='bg-gray-600 border-2 border-stone-950 p-2 '>Edit</button>
                  </Link>
                  <Link to={ `/device/delete/${device._id}`}>
                  <button className='bg-yellow-600 border-2 border-stone-950 p-2 '>Check out</button>
                  </Link>
                  </div>
                </td>
                 </tr>
            ))}
          </tbody>
        </table>
      )}
      
    </div>
  )
}

export default Home
