import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
    <nav>
        <div class="conteiner nav-conteiner">
        <h1 className='title'>Estudio Socio Económico |</h1>
        <NavLink to="/step1" className="links active"> Paso 1 </NavLink>
        <NavLink to="/step2" className="links"> Paso 2 </NavLink>
        <NavLink to="/step3" className="links"> Paso 3 </NavLink>
        <NavLink to="/step4" className="links"> Paso 4 </NavLink>
        <NavLink to="/step5" className="links"> Paso 5 </NavLink>
        </div>
    </nav>
    </header>
    
  )
}

