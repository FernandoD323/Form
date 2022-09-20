
import { useState } from 'react';
import { AppRouter } from './router/AppRouter';
export const FormApp = () => {

const [dataUser, setDataUser] = useState({})
const [dataFamily, setDataFamily] = useState({})
const [dataIncome, setDataIncome] = useState({})
const [dataExpenses, setDataExpenses] = useState({})

const [pagina1, setPagina1] = useState("/step1")
const [pagina4, setPagina4] = useState("/step4")
const [isDisable, setIsDisable] = useState("form__submit--disable")


  return (

      <>
      <AppRouter 
      dataUser={dataUser}  setDataUser = {setDataUser}  
      dataFamily={dataFamily} setDataFamily={setDataFamily} 
      dataIncome={dataIncome} setDataIncome={setDataIncome} 
      dataExpenses={dataExpenses} setDataExpenses={setDataExpenses}
      pagina1={pagina1} setPagina1={setPagina1}
      pagina4={pagina4} setPagina4={setPagina4}
      isDisable={isDisable} setIsDisableUser={setIsDisable}

      />      
      </>
      
  )
}

export default FormApp;