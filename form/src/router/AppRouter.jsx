
import { Navigate, Route, Routes } from 'react-router-dom'
import { Answers } from '../pages/Answers'
import { NavBar } from '../pages/NavBar'
import { PageStep1 } from '../pages/PageStep1'
import { PageStep2 } from '../pages/PageStep2'
import { PageStep3 } from '../pages/PageStep3'
import { PageStep4 } from '../pages/PageStep4'
import { PageStep5 } from '../pages/PageStep5'

export const AppRouter = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Navigate to={"/step1"} />} /> 
        <Route path="step1" element={<PageStep1  />} />
        <Route path="step2" element={<PageStep2 />} />
        <Route path="step3" element={<PageStep3 />} />
        <Route path="step4" element={<PageStep4 />} />
        <Route path="step5" element={<PageStep5 />} />
        <Route path="answers" element={<Answers />} />
      </Routes>

    </>
  )
}
