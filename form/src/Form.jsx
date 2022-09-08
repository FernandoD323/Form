

import React from 'react'

export const Form = () => {
  return (
   <>
   <h1 className='title'>Estudio Socio Económico</h1>
   <form class="form">
        <h2 class="form__title">- Datos Personales - </h2>
        <input type="text" class="form__name input" placeholder="Nombres:"/>
        <input type="text" class="form__email input" placeholder="Apellidos:"/>
        <input type="text" class="form__email input" placeholder="Correo:"/>
        <input type="text" class="form__email input" placeholder="Teléfono:"/>
        <input type="text" class="form__email input" placeholder="Dirección:"/>
        <input type="text" class="form__email  input1" placeholder="Carnet:"/>
        <input type="submit" value="Siguiente" class="form__submit"/>
        
    </form>

   <form class="form">
        <h2 class="form__title"> - Datos Familiares - </h2>
        <input type="text" class="form__name input" placeholder="Nombres Madre:"/>
        <input type="email" class="form__email input" placeholder="Nombres Padre:"/>

        {/* <textarea class="form__message input" placeholder="Mensaje:"></textarea> */}
        <input type="submit" value="Atras" class="form__submit"/>
        <input type="submit" value="Siguiente" class="form__submit"/>
    </form>

    <form class="form">
        <h2 class="form__title"> - Ingresos - </h2>
        <input type="text" class="form__name input" placeholder="Nombres Madre:"/>
        <input type="email" class="form__email input" placeholder="Nombres Padre:"/>

        {/* <textarea class="form__message input" placeholder="Mensaje:"></textarea> */}
        <input type="submit" value="Atras" class="form__submit"/>
        <input type="submit" value="Siguiente" class="form__submit"/>
    </form>

    <form class="form">
        <h2 class="form__title"> - Gastos Mensuales - </h2>
        <input type="text" class="form__name input" placeholder="Nombres Madre:"/>
        <input type="email" class="form__email input" placeholder="Nombres Padre:"/>

        {/* <textarea class="form__message input" placeholder="Mensaje:"></textarea> */}
        <input type="submit" value="Atras" class="form__submit"/>
        <input type="submit" value="Siguiente" class="form__submit"/>
    </form>
    <form class="form">
        <h2 class="form__title"> - Términos y Condiciones - </h2>
        <input type="text" class="form__name input" placeholder="Nombres Madre:"/>
        <input type="email" class="form__email input" placeholder="Nombres Padre:"/>

        {/* <textarea class="form__message input" placeholder="Mensaje:"></textarea> */}
        <input type="submit" value="Atras" class="form__submit"/>
        <input type="submit" value="Enviar" class="form__submit"/>
    </form>
   </>
  )
}


export default Form;