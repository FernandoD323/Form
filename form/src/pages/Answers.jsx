
import React, { useState } from 'react'

export const Answers = ({dataUser,dataExpenses}) => {


  return (
    
    <div class="form  ">
         
         <h2 class="form__title">- Datos - </h2>
         <hr className='form__hr' />
         <div className='input1'>
         <p className='form__texto '> Agradecemos que haya completado el formulario estimado {dataUser.names} {dataUser.surnames}, a continuación le adjuntamos su información como
            comprobante de lo realizado, le segurimos que tome una captura del mismo. ¡Feliz Día!</p>    
         <div>
        
          <div >
            <h3>Nombres: {dataUser.names} {dataUser.surnames}</h3> 
            <h3>Dirección: {dataUser.address}</h3>
            <h3>Correo Electrónico: {dataUser.email}</h3>
            <h3>Tutor o Encargado Legal: {dataUser.tutor}</h3>
            <h3> Gastos Mensuales: Q{ parseInt(dataExpenses.light) + parseInt(dataExpenses.water ) + parseInt(dataExpenses.food) + parseInt(dataExpenses.tuition)}</h3>
      

          </div>
          
          </div> 
         </div>

     </div>


  )
}
