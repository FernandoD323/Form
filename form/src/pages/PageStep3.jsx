import React from 'react'
import { Link } from 'react-router-dom'

export const PageStep3 = () => {
  return (
    <form class="form img3">
         <h2 class="form__title"> - Ingresos - </h2>
         <input type="text" class=" input" placeholder="Ingresos totales de la Madre:"/>
         <input type="email" class=" input" placeholder="Ingresos totales mensuales del Padre:"/>
         <input type="email" class=" input1" placeholder="Ingresos totales mensuales de los hermanos:"/>
         <textarea class="form__message input text__area" placeholder="Detalle si tiene alguna otra forma en la que obtiene algún ingreso:"></textarea>
         {/* <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/> */}
         <Link to="/step2" className="form__submit" >Atras</Link> 
         <Link to="/step4" className="form__submit" >Siguiente</Link> 
     </form>
  )
}
