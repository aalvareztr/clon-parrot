import React, { useState } from 'react'

const LoginScreen = () => {

  const [ loading,setLoading ] = useState(false);
  const [ error,setError ] = useState(false);
  const [ data,setData ] = useState({user:"",password:""});
  
  const HandleSubmit = (e) =>{
    e.preventDefault()
    console.log(data)
  }

  async function send_data (){
    try{
      //peticion
    }catch(err){
      //manejo del error 
    }finally{
      //fin de la peticion
    }
  }
  
  return (  
    <>
    {
      loading === true ?
      <div>Loading...</div>
      :
      <>
      {
        error === true ?
        <div>Error</div>
        :
        <form onSubmit={HandleSubmit}>
          <input onChange={(e)=>{setData({...data,user:e.target.value})}} type='text' placeholder='nombre usuario' />
          <input onChange={(e)=>{setData({...data,password:e.target.value})}} type='password' placeholder='contra' />
          <button type='submit'>Ingresar</button>
        </form>
      }
      </>
    }
    </>
  )
}

export default LoginScreen