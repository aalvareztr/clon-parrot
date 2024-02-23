import React, { useState } from 'react'
import { BsHouseDoor,BsGraphUpArrow,BsReverseLayoutTextSidebarReverse,BsCurrencyExchange,BsBuildingFill,BsChevronRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const AsideMenu = () => {

  const navigate = useNavigate();
  const initialState = [{key:1,deploy:false},{key:2,deploy:false},{key:3,deploy:false},{key:4,deploy:false}]
  const [ submenu,setSubMenu ] = useState(initialState)

  function changeStateSubMenu (key){

    const updateData = submenu.map((item)=>{
      if(item.key === key){
        return {...item,deploy:!item.deploy}
      }
      return {...item,deploy:false}
    })

    setSubMenu(updateData)

  }

  return (
    <aside className='aside'>
        <div className='aside-header'>Clon parrotfy</div>

        <div className='aside-icon' onClick={()=>{
          setSubMenu(initialState)
          navigate('/')
          }}>
          <div className='aside-icon-ttl'>
            <BsHouseDoor/>
            <span>Inicio</span>
          </div>
        </div>

        <div className={submenu[0].deploy === true ? 'aside-icon-selected' : 'aside-icon'} onClick={()=>{
          changeStateSubMenu(1)
          navigate('/quotes')
          }}>
          <div className='aside-icon-ttl'>
            <BsGraphUpArrow/>
            <span>Comercial</span>
          </div>
          <BsChevronRight className={submenu[0].deploy === true ? 'aside-arrow-animate' : null}/>
        </div>

        {
          submenu[0].deploy === true ?
          <>
            <div className='aside-icon-submenu'>Proyectos</div>
            <div className='aside-icon-submenu'>Consultas</div>
            <div className='aside-icon-submenu'>Cientes</div>
          </>
          :
          <></>
        }

        <div className={submenu[1].deploy === true ? 'aside-icon-selected' : 'aside-icon'} onClick={()=>{
          changeStateSubMenu(2)
          navigate('/work_orders')
          }}>
          <div className='aside-icon-ttl'>
            <BsReverseLayoutTextSidebarReverse/>
            <span>Operaciones</span>
          </div>
          <BsChevronRight className={submenu[1].deploy === true ? 'aside-arrow-animate' : null}/>
        </div>

        {
          submenu[1].deploy === true ?
          <>
            <div className='aside-icon-submenu'>Orden de trabajo</div>
            <div className='aside-icon-submenu'>Tablero</div>
            <div className='aside-icon-submenu'>Orden de compra</div>
          </>
          :
          <></>
        }

        <div className={submenu[2].deploy === true ? 'aside-icon-selected' : 'aside-icon'} onClick={()=>{changeStateSubMenu(3)}}>
          <div className='aside-icon-ttl'>
            <BsCurrencyExchange/>
            <span>Administracion</span>
          </div>
          <BsChevronRight className={submenu[2].deploy === true ? 'aside-arrow-animate' : null}/>
        </div>

        {
          submenu[2].deploy === true ?
          <>
            <div className='aside-icon-submenu'>Ventas</div>
            <div className='aside-icon-submenu'>Compras</div>
            <div className='aside-icon-submenu'>Pagos</div>
            <div className='aside-icon-submenu'>Cobros</div>
            <div className='aside-icon-submenu'>Cuentas</div>
          </>
          :
          <></>
        }

        <div className={submenu[3].deploy === true ? 'aside-icon-selected' : 'aside-icon'} onClick={()=>{changeStateSubMenu(4)}}>
          <div className='aside-icon-ttl'>
            <BsBuildingFill/>
            <span>Mi Empresa</span>
          </div>
          <BsChevronRight className={submenu[3].deploy === true ? 'aside-arrow-animate' : null}/>
        </div>

        {
          submenu[3].deploy === true ?
          <>
            <div className='aside-icon-submenu'>Mi Perfil</div>
            <div className='aside-icon-submenu'>Usuarios</div>
            <div className='aside-icon-submenu'>Productos/Servicios</div>
            <div className='aside-icon-submenu'>Lista de precios</div>
            <div className='aside-icon-submenu'>Proveeedores</div>
            <div className='aside-icon-submenu'>Configuraciones</div>
          </>
          :
          <></>
        }

    </aside>
  )
}

export default AsideMenu