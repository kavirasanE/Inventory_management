import React from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useNavigate, useParams } from 'react-router-dom'
import { useState ,useEffect} from 'react'


const EditDevice = () => {
  const [loading,setLoading] =useState(false);
  const [title,setTitle]= useState (' ');
  const [DeviceName,setDeviceName] = useState('');
  const [DSN,setDSN] =useState(' ');
  const navigate = useNavigate ();
  const {id} =useParams();
  useEffect( ()=> {
    setLoading(true);
    axios.get(`http://localhost:5000/device/${id}`) 
    .then ((res) => {
      setTitle(res.data.title);
      setDeviceName(res.data.DeviceName);
      setDSN(res.data.DSN)
      setLoading(false);
    })
    .catch( (error) => {
      setLoading(false);
      alert("error occured");
      console.log(error);
    })
  },[])
  
  const handleEditDevice =() => {
   const data ={
    title,
    DeviceName,
    DSN,
   };
   setLoading(true);
   axios
   .put(`http://localhost:5000/device/${id}`,data)
   .then(() => {
    setLoading(false);
    navigate('/Home');
   })
   .catch ((error) => {
    console.log(error);
   });
  }
  return (
     <div className='p-5'>
      <BackButton/>
      <h1 className='text-5xl my-4'>Edit Device List</h1>
      { loading ? <Spinner/> : '' }
      <div className='flex flex-col border-2 border-blue-600 rounded-xl w-[500px] p-5 mx-auto'>
        <div className='my-4'>
          <label className='text-2xl mr-4 text-gray-500'>Title</label>
          <input 
          type='text'
          value = {title}
          onChange={(e)=> { setTitle(e.target.value)}}
          className='border-2 border-red-900 px-4  py-2 w-full' />
        </div>
        <div className='my-4'>
          <label className='text-2xl mr-4 text-black'>Devicename</label>
          <input 
          type='text'
          value = {DeviceName}
          onChange={(e)=> { setDeviceName(e.target.value)}}
          className='border-2 border-yellow-900 px-4  py-2 w-full' />
        </div>
        <div className='my-4'>
          <label className='text-2xl mr-4 text-black'>DSN</label>
          <input 
          type='number'
          value = {DSN}
          onChange={(e)=> { setDSN(e.target.value)}}
          className='border-2 border-yellow-900 px-4  py-2 w-full' />
        </div>
        <button className='p-2 bg-sky-500 m-8' onClick={handleEditDevice} > Save </button>
      </div>
      </div>
  )
}

export default EditDevice
