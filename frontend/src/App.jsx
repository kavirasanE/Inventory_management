import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateDevice from './pages/CreateDevice';
import DeleteDevice from './pages/DeleteDevice';
import EditDevice from './pages/EditDevice';
import ShowDevice from './pages/ShowDevice';



const App = () => {
  return (
    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path='/device/create' element={<CreateDevice/>} />
      <Route path='/device/edit/:id' element={<EditDevice/>} />
      <Route path='/device/show/:id' element={<ShowDevice/>} />
      <Route path='/device/delete/:id' element={<DeleteDevice/>} />      
    </Routes>
  )
}

export default App
