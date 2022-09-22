import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { InputAdornment, TextField } from '@mui/material';

export const PageStep4 = ({  setIsDisableExpenses, isDisableExpenses, dataExpenses,pagina4,setPagina4, setDataExpenses }) => {
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
      <TextField  item sx={{ mb: 4,mr:4 }}
        label="Luz"
        className="input"
        value={dataExpenses.light}
        required
        InputProps={{
          startAdornment:<InputAdornment position="start">Q</InputAdornment>,
        }}
        onChange={(event) =>  {
          setDataExpenses({ ...dataExpenses, light: event.target.value.replace(/(?!-)[^0-9.]/g, '') })
          if (dataExpenses.light.length>1) {
            setErrorMessageLight("")
            setValidLight(false)
            setPagina4("/step5")  
            setIsDisableExpenses("form__submit")
          } else {

            setErrorMessageLight("Este parámetro debe ser un número y es obligatorio, puede incluir 2 decimales")
            setValidLight(false)
            setPagina4("/step4")  
            setIsDisableExpenses("form__submit--disable") 
 
          }
          if(dataExpenses.light.includes("-")){
            setErrorMessageLight("Ingrese un número válido por favor")
            setValidLight(true)
            setPagina4("/step4")  
            setIsDisableExpenses("form__submit--disable") 
          }
          if(dataExpenses.light.includes("..")){
            setErrorMessageLight("Ingrese un número válido por favor")
            setValidLight(true)
            setPagina4("/step4")  
            setIsDisableExpenses("form__submit--disable") 
          }
         
          
        }
      }
        error={validLight}
        helperText={errorMessageLight}
        name="light" />

      <TextField
        label="Agua"
        type="text"
        className="input"
        required
        InputProps={{
          startAdornment:<InputAdornment position="start">Q</InputAdornment>,
        }}
        value={dataExpenses.water}
        onChange={(event) =>  {
          setDataExpenses({ ...dataExpenses, water: event.target.value.replace(/(?!-)[^0-9.]/g, '') })
          if (dataExpenses.water.length>1) {
            setErrorMessageWater("")
            setValidWater(false)
            setPagina4("/step5")  
            setIsDisableExpenses("form__submit")
          } else {

            setErrorMessageWater("Este parámetro debe ser un número y es obligatorio, puede incluir 2 decimales")
            setValidWater(false)
            setPagina4("/step4")  
            setIsDisableExpenses("form__submit--disable") 
 
          }
          if(dataExpenses.water.includes("-")){
            setErrorMessageWater("Ingrese un número válido por favor")
            setValidWater(true)
            setPagina4("/step4")  
            setIsDisableExpenses("form__submit--disable") 
          }
          if(dataExpenses.water.includes("..")){
            setErrorMessageWater("Ingrese un número válido por favor")
            setValidWater(true)
            setPagina4("/step4")  
            setIsDisableExpenses("form__submit--disable") 
          }}}
        error={validWater}
        helperText={errorMessageWater}
        name="water" 
        />

      <TextField  item sx={{ mb: 4,mr:4 }}
        label="Alimentación"
        type="text"
        className="input"
        required
        InputProps={{
          startAdornment:<InputAdornment position="start">Q</InputAdornment>,
        }}
        value={dataExpenses.food}
        onChange={(event) =>  {
          setDataExpenses({ ...dataExpenses, food: event.target.value.replace(/(?!-)[^0-9.]/g, '') })
          if (dataExpenses.food.length>1) {
            setErrorMessageFood("")
            setValidFood(false)
            setPagina4("/step5")  
            setIsDisableExpenses("form__submit")
          } else {

            setErrorMessageFood("Este parámetro debe ser un número y es obligatorio, puede incluir 2 decimales")
            setValidFood(false)
            setPagina4("/step4")  
            setIsDisableExpenses("form__submit--disable") 
 
          }
          if(dataExpenses.food.includes("-")){
            setErrorMessageFood("Ingrese un número válido por favor")
            setValidFood(true)
            setPagina4("/step4")  
            setIsDisableExpenses("form__submit--disable") 
          }
          if(dataExpenses.food.includes("..")){
            setErrorMessageFood("Ingrese un número válido por favor")
            setValidFood(true)
            setPagina4("/step4")  
            setIsDisableExpenses("form__submit--disable") 
          }}}
        error={validFood}
        helperText={errorMessageFood}
        name="food" />

      <TextField
        label="Colegiatura"
        type="text"
        className="input"
        required
        InputProps={{
          startAdornment:<InputAdornment position="start">Q</InputAdornment>,
        }}
        value={dataExpenses.tuition}
        onChange={(event) =>  {
          setDataExpenses({ ...dataExpenses, tuition: event.target.value.replace(/(?!-)[^0-9.]/g, '') })
          if (dataExpenses.tuition.length>1) {
            setErrorMessageTuiton("")
            setValidTuiton(false)
            setPagina4("/step5")  
            setIsDisableExpenses("form__submit")
          } else {

            setErrorMessageTuiton("Este parámetro debe ser un número y es obligatorio, puede incluir 2 decimales")
            setValidTuiton(false)
            setPagina4("/step4")  
            setIsDisableExpenses("form__submit--disable") 
 
          }
          if(dataExpenses.tuition.includes("-")){
            setErrorMessageTuiton("Ingrese un número válido por favor")
            setValidTuiton(true)
            setPagina4("/step4")  
            setIsDisableExpenses("form__submit--disable") 
          }
          if(dataExpenses.tuition.includes("..")){
            setErrorMessageTuiton("Ingrese un número válido por favor")
            setValidTuiton(true)
            setPagina4("/step4")  
            setIsDisableExpenses("form__submit--disable") 
          }}}
        error={validTuiton}
        helperText={errorMessageTuiton}
        name="tuition" />

      <Link to="/step3" className="form__submit" >Atras</Link>
      <Link to={pagina4} type='submit' className={isDisableExpenses} >Siguiente</Link>
    </form>
  )
}
