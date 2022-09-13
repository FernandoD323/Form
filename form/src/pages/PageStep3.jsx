import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';

export const PageStep3 = () => {
 
    const { incomeM, incomeF,incomeB, moreI, onInputChange } = useForm({
      incomeM: '',
      incomeF: '',
      incomeB: '',
      moreI: '',

  
  
  });
  return (
    <form class="form img3">
         <h2 class="form__title"> - Ingresos - </h2>
         <input type="text" class=" input" placeholder="Ingresos totales de la Madre:" value={incomeM} onChange={onInputChange} name="incomeM"/>
         <input type="email" class=" input" placeholder="Ingresos totales mensuales del Padre:" value={incomeF} onChange={onInputChange} name="incomeF"/>
         <input type="email" class=" input1" placeholder="Ingresos totales mensuales de los hermanos:" value={incomeB} onChange={onInputChange} name="incomeB"/>
         <textarea class="form__message input text__area" placeholder="Detalle si tiene alguna otra forma en la que obtiene algún ingreso:" value={moreI} onChange={onInputChange} name="moreI"></textarea>
         {/* <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/> */}
         <Link to="/step2" className="form__submit" >Atras</Link> 
         <Link to="/step4" className="form__submit" >Siguiente</Link> 
     </form>
  )
}
