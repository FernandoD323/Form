import React from 'react'

export const PageStep4 = () => {
  return (
    <form class="form img4">
         <h2 class="form__title"> - Gastos Mensuales - </h2>
         <input type="text" class=" input" placeholder="Nombres Madre:"/>
         <input type="email" class=" input" placeholder="Nombres Padre:"/>
 
         
         <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/>
     </form>
  )
}
