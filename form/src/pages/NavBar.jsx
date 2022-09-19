import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
    <nav>
        <div class="conteiner nav-conteiner">
        <h1 className='title'>Estudio Socio Económico |</h1>
        <NavLink to="/home" className="links "> Home </NavLink>
        <NavLink to="/step1" className="links "> Datos Personales </NavLink>
        <NavLink to="/step2" className="links"> Datos Familiares</NavLink>
        <NavLink to="/step3" className="links"> Ingresos</NavLink>
        <NavLink to="/step4" className="links"> Gastos </NavLink>
        </div>
    </nav>
    </header>
    
  )
}

