import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';

export const PageStep2 = () => {
  const { nameM, nameF,phoneM,phoneF,workM,workF, brothers, onInputChange } = useForm({
    nameM: '',
    nameF: '',
    phoneM: '',
    phoneF: '',
    workM: '',
    workF: '',
    brothers: ''


});
  return (
    <form class="form img2">
         <h2 class="form__title"> - Datos Familiares - </h2>
         <input type="text" class=" input" placeholder="Nombres y Apellidos de la Madre:" value={nameM} onChange={onInputChange} name="nameM"/>
         <input type="email" class=" input" placeholder="Nombres y apellidos del Padre:" value={nameF} onChange={onInputChange} name="nameF"/>
         <input type="email" class=" input" placeholder="Teléfono de la Madre:" value={phoneM} onChange={onInputChange} name="phoneM"/>
         <input type="text" class=" input" placeholder="Teléfono del Padre:" value={phoneF} onChange={onInputChange} name="phoneF"/>
         <input type="email" class=" input" placeholder="Ocupación de la Madre:" value={workM} onChange={onInputChange} name="workM"/>
         <input type="email" class=" input" placeholder="Ocupación del Padre:" value={workF} onChange={onInputChange} name="workF"/>
         <input type="email" class=" input1" placeholder="¿Cuántos Herman@s Tiene?:" value={brothers} onChange={onInputChange} name="brothers"/>
         {/* <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/> */}
         <Link to="/step1" className="form__submit" >Atras</Link> 
         <Link to="/step3" className="form__submit" >Siguiente</Link> 
     </form>
  )
}
