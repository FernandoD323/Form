
import React, { useState } from 'react'

export const Answers = ({dataUser,dataExpenses}) => {


  return (
    
    <form class="form img1">
         <h2 class="form__title">- Datos - </h2>
         <h1>{dataUser.names}</h1>
         <h2>{parseInt(dataExpenses.light) + parseInt(dataExpenses.water ) + parseInt(dataExpenses.food) + parseInt(dataExpenses.tuition)}</h2>
         <h1></h1>
         <hr className='form__hr' />
     </form>
  )
}
