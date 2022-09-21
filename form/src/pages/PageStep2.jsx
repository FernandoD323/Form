import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { TextField } from '@mui/material';
export const PageStep2 = ({ dataFamily, setDataFamily }) => {
  const { nameM, nameF, phoneM, phoneF, workM, workF, brothers } = useForm({
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

    setDataFamily(() => ({
      nameM: nameM,
      nameF: nameF,
      phoneM: phoneM,
      phoneF: phoneF,
      workM: workM,
      workF: workF,
      brothers: brothers,
    }))

  }
  return (
    <form onSubmit={onSubmit} class="form img2">
      <h2 class="form__title"> - Datos Familiares - </h2>
      <hr className='form__hr' />

      <TextField item sx={{ mb: 2,mr:4}}
        label="Nombres y Apellidos de la Madre"
        type="text"
        className="input"
       
        value={dataFamily.nameM} onChange={(event) => setDataFamily({ ...dataFamily, nameM: event.target.value })}
        name="nameM" />

      <TextField
        label="Nombres y apellidos del Padre"
        type="text"
        className="input"
        
        value={dataFamily.nameF} onChange={(event) => setDataFamily({ ...dataFamily, nameF: event.target.value })}
        name="nameF" />

      <TextField item sx={{ mb: 2,mr:4 }}
        label="Teléfono de la Madre"
        type="text"
        className="input"
       
        value={dataFamily.phoneM} onChange={(event) => setDataFamily({ ...dataFamily, phoneM: event.target.value })}
        name="phoneM" />

      <TextField
        label="Teléfono del Padre"
        type="text"
        className="input"
       
        value={dataFamily.phoneF} onChange={(event) => setDataFamily({ ...dataFamily, phoneF: event.target.value })}
        name="phoneF" />

      <TextField item sx={{ mb: 2,mr:4 }}
        label="Ocupación de la Madre"
        type="text"
        className="input"
        
        value={dataFamily.workM} onChange={(event) => setDataFamily({ ...dataFamily, workM: event.target.value })}
        name="workM" />

      <TextField
        label="Ocupación del Padre"
        type="text"
        className="input"
       
        value={dataFamily.workF} onChange={(event) => setDataFamily({ ...dataFamily, workF: event.target.value })}
        name="workF" />

      <TextField item sx={{ mb: 4 }}
        label="¿Cuántos Herman@s Tiene?"
        type="text"
        className="input1"
        value={dataFamily.brothers} onChange={(event) => setDataFamily({ ...dataFamily, brothers: event.target.value.replace(/\D/g, '') })}
        name="brothers" />

      {/* <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/> */}
      <Link to="/step1" className="form__submit" >Atras</Link>
      <Link to="/step3" type='submit' className="form__submit" >Siguiente</Link>
    </form>
  )
}
