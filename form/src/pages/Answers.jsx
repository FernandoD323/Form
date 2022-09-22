
import { Link } from 'react-router-dom'

export const Answers = ({dataUser,dataExpenses,dataIncome,dataFamily}) => {


  return (
    
    <div class="form  ">
         
         <h2 class="form__title">- Datos - </h2>
         <hr className='form__hr' />
         <div className='input__answers'>
         <p className='form__texto '> Agradecemos que haya completado el formulario estimado {dataUser.names} {dataUser.surnames}, a continuación le adjuntamos su información como
            comprobante de lo realizado, le segurimos que tome una captura del mismo. ¡Feliz Día!</p>    
         <div>
        
          <div >
            <h3 className='form__color'>~  Datos Personales ~</h3>
            <h3>Nombres: {dataUser.names} {dataUser.surnames}</h3> 
            <h3>Dirección: {dataUser.address}</h3>
            <h3>Correo Electrónico: {dataUser.email}</h3>
            <h3>Tutor o Encargado Legal: {dataUser.tutor}</h3>
            <Link to="/step1" className="form__submitA" >¡Editar!</Link>
            <hr className='form__hr'/>
            <h3 className='form__color'>~  Datos Familiares ~</h3>
            <h3> Nombres de la Madre: {dataFamily.nameM}</h3>
            <h3> Nombres del Padre: {dataFamily.nameF}</h3>
            <h3> Teléfono Celular de la Madre: {dataFamily.phoneM}</h3>
            <h3> Teléfono Celular del Padre: {dataFamily.phoneF}</h3>
            <h3> Número de herman@s: {dataFamily.brothers}</h3>
            <Link to="/step2" className="form__submitA" >¡Editar!</Link>
            <hr className='form__hr'/>
            <h3 className='form__color'>~ Ingresos Mensuales ~</h3>
            <h3> Ingresos Madre: {dataIncome.incomeM} </h3>
            <h3> Ingresos Padre: {dataIncome.incomeF} </h3>
            <h3> Ingresos Hermanos: {dataIncome.incomeB} </h3>
            <h3> Otro tipo de ingresos: {dataIncome.moreI} </h3>
            <Link to="/step3" className="form__submitA" >¡Editar!</Link>
            <hr className='form__hr'/>
            <h3 className='form__color'>~ Gastos Mensuales ~</h3>
            <h3> Agua: Q{dataExpenses.water}</h3>
            <h3> Luz: Q{dataExpenses.light}</h3>
            <h3> Canasta Básica: Q{dataExpenses.food}</h3>
            <h3> Colegiatura: Q{dataExpenses.tuition}</h3>
            {/* <h3> Total de Gastos: Q{ parseInt(dataExpenses.light) + parseInt(dataExpenses.water ) + parseInt(dataExpenses.food) + parseInt(dataExpenses.tuition)}</h3> */}
            <Link to="/step4" className="form__submitA" >¡Editar!</Link>
            <hr className='form__hr'/>

          </div>
          <a href="/home" className='form__answers'> ¡Envia otra respuesta!</a>
          </div> 
         </div>

     </div>


  )
}
