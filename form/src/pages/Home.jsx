import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div class="form__home  ">
            <h2 class="form__title"> Bienvenido</h2>
            <hr className='form__hr' />
            <p className='form__texto'> Te damos la bienvenida a este pequeño formulario en donde se te presentaran ciertas preguntas fundamentales que tendrás que responder
                para poder recopilar tu información e ir avanzando paso a paso, te agradecemos por tu confianza y profesionalismo. </p>
            <div>
            <Link to="/step1" className="form__submit-home">¡Vamos!</Link> 
            </div>
        </div>
    )
}
