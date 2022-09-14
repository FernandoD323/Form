import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';

export const PageStep3 = ({dataIncome, setDataIncome}) => {
 
    const { incomeM, incomeF,incomeB, moreI } = useForm({
      incomeM: '',
      incomeF: '',
      incomeB: '',
      moreI: '',

  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (incomeM.trim().length <= 1) return;
    
    setDataIncome(()=> ({
      incomeM: incomeM,
      incomeF:incomeF,
      incomeB: incomeB,
      moreI: moreI,
      }))
    
  }
  return (
    <form class="form img3">
         <h2 class="form__title"> - Ingresos - </h2>
         <input type="text" class=" input" placeholder="Ingresos totales de la Madre:" value={dataIncome.incomeM} onChange={(event)=>setDataIncome({...dataIncome, incomeM:event.target.value})} name="incomeM"/>
         <input type="email" class=" input" placeholder="Ingresos totales mensuales del Padre:" value={dataIncome.incomeF} onChange={(event)=>setDataIncome({...dataIncome, incomeF:event.target.value})} name="incomeF"/>
         <input type="email" class=" input1" placeholder="Ingresos totales mensuales de los hermanos:" value={dataIncome.incomeB} onChange={(event)=>setDataIncome({...dataIncome, incomeB:event.target.value})} name="incomeB"/>
         <textarea class="form__message input text__area" placeholder="Detalle si tiene alguna otra forma en la que obtiene algún ingreso:" value={dataIncome.moreI} onChange={(event)=>setDataIncome({...dataIncome, moreI:event.target.value})} name="moreI"></textarea>
         {/* <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/> */}
         <Link to="/step2" className="form__submit" >Atras</Link> 
         <Link to="/step4" type='submit' className="form__submit" >Siguiente</Link> 
     </form>
  )
}
