import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { InputAdornment, TextField } from '@mui/material';
export const PageStep3 = ({ dataIncome, setDataIncome }) => {

  const { incomeM, incomeF, incomeB, moreI } = useForm({
    incomeM: '',
    incomeF: '',
    incomeB: '',
    moreI: '',

  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (incomeM.trim().length <= 1) return;

    setDataIncome(() => ({
      incomeM: incomeM,
      incomeF: incomeF,
      incomeB: incomeB,
      moreI: moreI,
    }))

  }
  return (
    <form className="form img3">
      <h2 className="form__title"> - Ingresos - </h2>
      <hr className='form__hr' />
      <TextField item sx={{ mb: 3,mr:4 }}
        label="Ingresos totales de la Madre"
        type="text"
        className=" input"
        InputProps={{
          startAdornment:<InputAdornment position="start">Q</InputAdornment>,
        }}
        value={dataIncome.incomeM}
        onChange={(event) => setDataIncome({ ...dataIncome, incomeM: event.target.value.replace(/\D/g, '') })}
        name="incomeM" />

      <TextField  item sx={{ mb: 3}}
        label="Ingresos totales del Padre"
        type="email"
        className=" input"
        InputProps={{
          startAdornment:<InputAdornment position="start">Q</InputAdornment>,
        }}
        value={dataIncome.incomeF}
        onChange={(event) => setDataIncome({ ...dataIncome, incomeF: event.target.value.replace(/\D/g, '') })}
        name="incomeF" />

      <TextField item sx={{ mb: 3}}
        label="Ingresos totales de los hermanos"
        type="email"
        className=" input1"
        InputProps={{
          startAdornment:<InputAdornment position="start">Q</InputAdornment>,
        }}
        value={dataIncome.incomeB}
        onChange={(event) => setDataIncome({ ...dataIncome, incomeB: event.target.value.replace(/\D/g, '') })}
        name="incomeB" />

      <TextField item sx={{ mb: 3}}
        label="Otro tipo de ingresos familiares"
        className=" input1"
        InputProps={{
          startAdornment:<InputAdornment position="start">Q</InputAdornment>,
        }}
        value={dataIncome.moreI}
        onChange={(event) => setDataIncome({ ...dataIncome, moreI: event.target.value.replace(/\D/g, '') })}
        name="moreI"/>

      <Link to="/step2" className="form__submit" >Atras</Link>
      <Link to="/step4" type='submit' className="form__submit" >Siguiente</Link>
    </form>
  )
}
