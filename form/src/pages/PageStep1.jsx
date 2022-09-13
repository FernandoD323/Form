import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import { useForm } from '../hooks/useForm';

export const PageStep1 = ({children}) => {

const [name, setName] = useState()

  const { names, surnames, onInputChange } = useForm({
    names: '',
    surnames: ''
});

const onSubmit = (event) => {
    event.preventDefault();
    if (names.trim().length <= 1) return;

    console.log(names)
    setName(names)
    
}


  return (
    <>
    <UserContext.Provider  value={{hola:'mundo'}}>
      {children}
    </UserContext.Provider>

      <h1>{name}</h1>ss
    <form onSubmit={onSubmit} class="form img1">
         <h2 class="form__title">- Datos Personales - </h2>
         <hr className='form__hr' />
         <input type="text" className="input" placeholder="Nombres:" value={names} onChange={onInputChange} name="names"/>
         <input type="text" className=" input" placeholder="Apellidos:" value={surnames} onChange={onInputChange} name="surnames"/>
         <input type="text" className=" input" placeholder="Correo:"/>
         <input type="text" className=" input" placeholder="Teléfono:"/>
         <input type="text" className=" input" placeholder="Dirección:"/>
         <input type="text" className=" input" placeholder="Carnet:"/>
         <input type="text" className=" input1" placeholder="Tutor legal/Encargad@:"/>
         
         <button onClick={onSubmit}> AJNFOQINFOIEQNF</button>
         <Link to="/step2" className="form__submit">Siguiente</Link> 
     </form>
    
 
    {/* <form class="form img2">
         <h2 class="form__title"> - Datos Familiares - </h2>
         <input type="text" class=" input" placeholder="Nombres y Apellidos de la Madre:"/>
         <input type="email" class=" input" placeholder="Nombres y apellidos del Padre:"/>
         <input type="email" class=" input" placeholder="Teléfono de la Madre"/>
         <input type="text" class=" input" placeholder="Teléfono del Padre"/>
         <input type="email" class=" input" placeholder="Fecha de Nacimiento de la Madre"/>
         <input type="email" class=" input" placeholder="Fecha de Nacimiento del Padre"/>
         <input type="email" class=" input" placeholder="Ocupación de la Madre"/>
         <input type="email" class=" input" placeholder="Ocupación del Padre"/>
         <input type="email" class=" input1" placeholder="¿Cuántos Herman@s Tiene?"/>
         
         <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/>
     </form>
 
     <form class="form img3">
         <h2 class="form__title"> - Ingresos - </h2>
         <input type="text" class=" input" placeholder="Ingresos totales de la Madre:"/>
         <input type="email" class=" input" placeholder="Ingresos totales mensuales del Padre:"/>
         <input type="email" class=" input1" placeholder="Ingresos totales mensuales de los hermanos:"/>
         <textarea class="form__message input text__area" placeholder="Detalle si tiene alguna otra forma en la que obtiene algún ingreso:"></textarea>
         <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/>
     </form>
 
     <form class="form img4">
         <h2 class="form__title"> - Gastos Mensuales - </h2>
         <input type="text" class=" input" placeholder="Nombres Madre:"/>
         <input type="email" class=" input" placeholder="Nombres Padre:"/>
 
         
         <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Siguiente" class="form__submit"/>
     </form>
     <form class="form img5">
         <h2 class="form__title"> - Términos y Condiciones - </h2>
         <p className=' input1'
         > Estoy de acuerdo con que a través de este formulario se pueda hacer uso de la información proporcionada por mi persona
         para que sea usada única y exclusivamente para un estudio socio económico 
         </p>
 
         
         <input type="submit" value="Atras" class="form__submit"/>
         <input type="submit" value="Enviar" class="form__submit"/>
     </form> */}
    </>
  )
}
