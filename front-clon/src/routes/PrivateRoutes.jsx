import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AsideMenu from '../components/AsideMenu';


const PrivateRoutes = () => {
  

  return (
    <>
      <header className='header'>
        Header
      </header>
      <AsideMenu/>
      <main className='main'>
        <Routes>
          <Route path='/' element={<div>Home Screessn</div>}/>
          <Route path='/quotes' element={<div>Comercial</div>}/>
          <Route path='/work_orders' element={<div>Ordenes de trabajo</div>}/>
        </Routes>
      </main>
    </>
  )
}

export default PrivateRoutes