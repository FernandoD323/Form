import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';

export const PageStep4 = () => {
  const { light, water,food, education, onInputChange } = useForm({
    light: '',
    water: '',
    food: '',
    education: '',
});
  return (
    <form class="form img4">
         <h2 class="form__title"> - Gastos Mensuales - </h2>
         <input type="text" class=" input" placeholder="Luz:" value={light} onChange={onInputChange} name="light"/>
         <input type="text" class=" input" placeholder="Agua:" value={water} onChange={onInputChange} name="water"/>
         <input type="text" class=" input" placeholder="Canasta Básica:" value={food} onChange={onInputChange} name="food"/>
         <input type="text" class=" input" placeholder="Educación:" value={education} onChange={onInputChange} name="education"/>
 
         
         {/* <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/> */}
         <Link to="/step3" className="form__submit" >Atras</Link> 
         <Link to="/step5" className="form__submit" >Siguiente</Link> 
     </form>
  )
}
