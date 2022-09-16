import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { TextField } from '@mui/material';

export const PageStep4 = ({ dataExpenses, setDataExpenses }) => {
  const { light, water, food, tuition } = useForm({
    light: '',
    water: '',
    food: '',
    tuition: '',
  });
  const onSubmit = (event) => {
    event.preventDefault();
    if (tuition.trim().length <= 1) return;
    setDataExpenses(() => ({
      light: light,
      water: water,
      food: food,
      tuition: tuition,
    }))

  }

  const [errorMessageWater, setErrorMessageWater] = useState("");
  const [errorMessageLight, setErrorMessageLight] = useState("");
  const [errorMessageFood, setErrorMessageFood] = useState("")
  const [errorMessageTuiton, setErrorMessageTuiton] = useState("")

  const [validWater, setValidWater] = useState(false)
  const [validLight, setValidLight] = useState(false)
  const [validFood, setValidFood] = useState(false)
  const [validTuiton, setValidTuiton] = useState(false)

  return (
    <form onSubmit={onSubmit} class="form img4">
      <h2 class="form__title"> - Gastos Mensuales - </h2>
      <hr className='form__hr' />
      <TextField  item sx={{ mb: 2,mr:4 }}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        label="Luz"
        className="input"
        value={dataExpenses.light}
        onChange={(event) =>  {
          setDataExpenses({ ...dataExpenses, light: event.target.value })
          if (dataExpenses.light.length <= 1) {
            setErrorMessageLight("Este parámetro es obligatorio, debe ser un número con terminación de 2 decimales")
            setValidLight(true)
          } else {
            setErrorMessageLight("")
            setValidLight(false)
          }
        }}
        error={validLight}
        helperText={errorMessageLight}
        name="light" />

      <TextField
        label="Agua"
        type="text"
        className="input"
        
        value={dataExpenses.water}
        onChange={(event) =>  {
          setDataExpenses({ ...dataExpenses, water: event.target.value })
          if (dataExpenses.water.length <= 1) {
            setErrorMessageWater("Este parámetro es obligatorio, debe ser un número con terminación de 2 decimales")
            setValidWater(true)
          } else {
            setErrorMessageWater("")
            setValidWater(false)
          }
        }}
        error={validWater}
        helperText={errorMessageWater}
        name="water" 
        />

      <TextField  item sx={{ mb: 4,mr:4 }}
        label="Alimentación"
        type="text"
        className="input"
        
        value={dataExpenses.food}
        onChange={(event) =>  {
          setDataExpenses({ ...dataExpenses, food: event.target.value })
          if (dataExpenses.food.length <= 1) {
            setErrorMessageFood("Este parámetro es obligatorio, debe ser un número con terminación de 2 decimales")
            setValidFood(true)
          } else {
            setErrorMessageFood("")
            setValidFood(false)
          }
        }}
        error={validFood}
        helperText={errorMessageFood}
        name="food" />

      <TextField
        label="Colegiatura"
        type="text"
        className="input"
        
        value={dataExpenses.tuition}
        onChange={(event) =>  {
          setDataExpenses({ ...dataExpenses, tuition: event.target.value })
          if (dataExpenses.tuition.length <= 1) {
            setErrorMessageTuiton("Este parámetro es obligatorio, debe ser un número con terminación de 2 decimales")
            setValidTuiton(true)
          } else {
            setErrorMessageTuiton("")
            setValidTuiton(false)
          }
        }}
        error={validTuiton}
        helperText={errorMessageTuiton}
        name="tuition" />

      <Link to="/step3" className="form__submit" >Atras</Link>
      <Link to="/step5" type='submit' className="form__submit" >Siguiente</Link>
    </form>
  )
}
