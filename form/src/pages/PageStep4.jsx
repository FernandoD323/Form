import React from 'react'
import { Link } from 'react-router-dom'

export const PageStep4 = () => {
  return (
    <form class="form img4">
         <h2 class="form__title"> - Gastos Mensuales - </h2>
         <input type="text" class=" input" placeholder="Nombres Madre:"/>
         <input type="email" class=" input" placeholder="Nombres Padre:"/>
 
         
         {/* <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/> */}
         <Link to="/step3" className="form__submit" >Atras</Link> 
         <Link to="/step5" className="form__submit" >Siguiente</Link> 
     </form>
  )
}
