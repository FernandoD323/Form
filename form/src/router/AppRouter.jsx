
import { Navigate, Route, Routes } from 'react-router-dom'
import { Answers } from '../pages/Answers'
import { Home } from '../pages/Home'
import { NavBar } from '../pages/NavBar'
import { PageStep1 } from '../pages/PageStep1'
import { PageStep2 } from '../pages/PageStep2'
import { PageStep3 } from '../pages/PageStep3'
import { PageStep4 } from '../pages/PageStep4'
import { PageStep5 } from '../pages/PageStep5'

export const AppRouter = ({isDisableExpenses,setIsDisableExpenses,isDisable,setIsDisable,pagina1, setPagina1,pagina4, setPagina4, dataUser,dataExpenses,dataFamily,dataIncome,setDataIncome, setDataUser, setDataFamily,setDataExpenses}) => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} /> 
        <Route path="home" element={<Home to={"/home"} />} /> 
        <Route path="step1" element={<PageStep1 isDisable={isDisable} setIsDisable={setIsDisable} dataUser={dataUser} setDataUser={setDataUser}  pagina1={pagina1} setPagina1={setPagina1}/>} />
        <Route path="step2" element={<PageStep2 dataFamily={dataFamily} setDataFamily={setDataFamily}/>} />
        <Route path="step3" element={<PageStep3 dataIncome={dataIncome} setDataIncome={setDataIncome}/>} />
        <Route path="step4" element={<PageStep4 isDisableExpenses={isDisableExpenses} setIsDisableExpenses={setIsDisableExpenses} dataExpenses={dataExpenses} setDataExpenses={setDataExpenses} pagina4={pagina4} setPagina4 ={setPagina4}/>} />
        <Route path="step5" element={<PageStep5 />} />
        <Route path="answers" element={<Answers dataUser={dataUser} dataFamily={dataFamily} dataIncome={dataIncome}  dataExpenses={dataExpenses}/>} />
      </Routes>

    </>
  )
}
