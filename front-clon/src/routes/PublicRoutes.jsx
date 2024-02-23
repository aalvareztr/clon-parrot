import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from '../screens/PublicScreens/LoginScreen'

const PublicRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<LoginScreen/>} />
    </Routes>
  )
}

export default PublicRoutes