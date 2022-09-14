
import { useState } from 'react';
import { AppRouter } from './router/AppRouter';
export const FormApp = () => {

const [dataUser, setDataUser] = useState({})
const [dataFamily, setDataFamily] = useState({})
const [dataIncome, setDataIncome] = useState({})
const [dataExpenses, setDataExpenses] = useState({})


console.log(dataUser)
console.log(dataFamily)
console.log(dataExpenses)


  return (

      <>
      <AppRouter 
      dataUser={dataUser}  setDataUser = {setDataUser}  
      dataFamily={dataFamily} setDataFamily={setDataFamily} 
      dataIncome={dataIncome} setDataIncome={setDataIncome} 
      dataExpenses={dataExpenses} setDataExpenses={setDataExpenses}
      />      
      </>
      
  )
}

export default FormApp;