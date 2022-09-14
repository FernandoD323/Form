import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';

export const PageStep2 = ({dataFamily,setDataFamily}) => {
  const { nameM, nameF, phoneM,phoneF,workM,workF, brothers} = useForm({
    nameM: '',
    nameF: '',
    phoneM: '',
    phoneF: '',
    workM: '',
    workF: '',
    brothers: '',


});

const onSubmit = (event) => {
  event.preventDefault();
  if (nameM.trim().length <= 1) return;
  
  setDataFamily(()=> ({
    nameM: nameM,
    nameF: nameF,
    phoneM: phoneM,
    phoneF: phoneF,
    workM: workM,
    workF: workF,
    brothers:brothers,
    }))
  
}
  return (
    <form onSubmit={onSubmit} class="form img2">
         <h2 class="form__title"> - Datos Familiares - </h2>
         <input type="text" class=" input" placeholder="Nombres y Apellidos de la Madre:" value={dataFamily.nameM} onChange={(event)=>setDataFamily({...dataFamily, nameM:event.target.value})} name="nameM"/>
         <input type="text" class=" input" placeholder="Nombres y apellidos del Padre:" value={dataFamily.nameF} onChange={(event)=>setDataFamily({...dataFamily, nameF:event.target.value})} name="nameF"/>
         <input type="text" class=" input" placeholder="Teléfono de la Madre:" value={dataFamily.phoneM} onChange={(event)=>setDataFamily({...dataFamily, phoneM:event.target.value})} name="phoneM"/>
         <input type="text" class=" input" placeholder="Teléfono del Padre:" value={dataFamily.phoneF} onChange={(event)=>setDataFamily({...dataFamily, phoneF:event.target.value})} name="phoneF"/>
         <input type="text" class=" input" placeholder="Ocupación de la Madre:" value={dataFamily.workM} onChange={(event)=>setDataFamily({...dataFamily, workM:event.target.value})} name="workM"/>
         <input type="text" class=" input" placeholder="Ocupación del Padre:" value={dataFamily.workF} onChange={(event)=>setDataFamily({...dataFamily, workF:event.target.value})} name="workF"/>
         <input type="text" class=" input1" placeholder="¿Cuántos Herman@s Tiene?:" value={dataFamily.brothers} onChange={(event)=>setDataFamily({...dataFamily, brothers:event.target.value})} name="brothers"/>
         {/* <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/> */}
         <Link to="/step1" className="form__submit" >Atras</Link> 
         <Link to="/step3" type='submit' className="form__submit" >Siguiente</Link> 
     </form>
  )
}
