import React, { useState } from 'react'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const AppRouter = () => {
  const [login,setLogin] = useState(true)
  return (
    <>
      {
        login === true ?
        <PrivateRoutes/>
        :
        <PublicRoutes/>
      }
    </>
  )
}

export default AppRouter