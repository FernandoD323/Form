import React from 'react'
import { Link } from 'react-router-dom'

export const PageStep2 = () => {
  
  return (
    <form class="form img2">
         <h2 class="form__title"> - Datos Familiares - </h2>
         <input type="text" class=" input" placeholder="Nombres y Apellidos de la Madre:"/>
         <input type="email" class=" input" placeholder="Nombres y apellidos del Padre:"/>
         <input type="email" class=" input" placeholder="Teléfono de la Madre"/>
         <input type="text" class=" input" placeholder="Teléfono del Padre"/>
         <input type="email" class=" input" placeholder="Fecha de Nacimiento de la Madre"/>
         <input type="email" class=" input" placeholder="Fecha de Nacimiento del Padre"/>
         <input type="email" class=" input" placeholder="Ocupación de la Madre"/>
         <input type="email" class=" input" placeholder="Ocupación del Padre"/>
         <input type="email" class=" input1" placeholder="¿Cuántos Herman@s Tiene?"/>
         {/* <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/> */}
         <Link to="/step1" className="form__submit" >Atras</Link> 
         <Link to="/step3" className="form__submit" >Siguiente</Link> 
     </form>
  )
}
