import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';

export const PageStep4 = ({dataExpenses,setDataExpenses}) => {
  const { light, water,food, tuition, onInputChange } = useForm({
    light: '',
    water: '',
    food: '',
    tuition: '',
});
const onSubmit = (event) => {
  event.preventDefault();
  if (tuition.trim().length <= 1) return;
  setDataExpenses(()=> ({
    light: light,
    water: water,
    food: food,
    tuition: tuition,
  }))
  
}
  return (
    <form onSubmit={onSubmit} class="form img4">
         <h2 class="form__title"> - Gastos Mensuales - </h2>
         <input type="text" class=" input" placeholder="Luz:" value={dataExpenses.light} onChange={(event)=>setDataExpenses({...dataExpenses, light:event.target.value})} name="light"/>
         <input type="text" class=" input" placeholder="Agua:" value={dataExpenses.water} onChange={(event)=>setDataExpenses({...dataExpenses, water:event.target.value})} name="water"/>
         <input type="text" class=" input" placeholder="Canasta Básica:" value={dataExpenses.food} onChange={(event)=>setDataExpenses({...dataExpenses, food:event.target.value})} name="food"/>
         <input type="text" class=" input" placeholder="Colegiatura:" value={dataExpenses.tuition} onChange={(event)=>setDataExpenses({...dataExpenses, tuition:event.target.value})} name="tuition"/>
 
         
         {/* <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/> */}
         <Link to="/step3" className="form__submit" >Atras</Link> 
         <Link to="/step5" type='submit' className="form__submit" >Siguiente</Link> 
     </form>
  )
}
