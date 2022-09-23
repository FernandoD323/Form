import { Link } from "react-router-dom"


export const PageStep5 = () => {
  return (
    <form class="form img5">
    <h2 class="form__title">Términos y Condiciones</h2>
    <p className=' paragrah input1'
    >Al enviar este formulario estoy de acuerdo con que a través del mismo se pueda hacer uso de la información proporcionada por mi persona
    para que sea usada única y exclusivamente para un estudio socio económico.
    </p>

    {/* <input type="submit" value="Atras" class="form__submit"/>
    <input type="submit" value="Enviar" class="form__submit"/> */}
    <Link to="/step4" className="form__submit" >Atras</Link> 
    <Link to="/answers" className="form__submit" >Enviar</Link> 
</form>

  )
}
