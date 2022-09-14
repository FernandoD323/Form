import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import swal from 'sweetalert2'
export const PageStep1 = ({ dataUser, setDataUser }) => {


  const { names, surnames, email, phone, address, DPI, tutor } = useForm({
    names: '',
    surnames: '',
    email: '',
    phone: '',
    address: '',
    DPI: '',
    tutor: ''


  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (names.trim().length <= 1) {swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    });}
    setDataUser(() => ({
      names: names,
      surnames: surnames,
      email: email,
      phone: phone,
      address: address,
      DPI: DPI,
      tutor: tutor,
    }))

  }


  return (
    <>

      <form onSubmit={onSubmit} class="form img1">
        <h2 class="form__title">- Datos Personales - </h2>
        <hr className='form__hr' />
        <input type="text"
          className="input"
          placeholder="Nombres:"
          value={dataUser.names}
          onChange={(event) => setDataUser({ ...dataUser, names: event.target.value })}
          name="names"
          
          
          />

        <input type="text"
          className=" input"
          placeholder="Apellidos:"
          value={dataUser.surnames}
          onChange={(event) => setDataUser({ ...dataUser, surnames: event.target.value })}
          name="surnames" />


        <input type="text"
          className=" input"
          placeholder="Correo:"
          value={dataUser.email}
          onChange={(event) => setDataUser({ ...dataUser, email: event.target.value })}
          name="email" />

        <input type="text"
          className=" input"
          placeholder="Teléfono:"
          value={dataUser.phone}
          onChange={(event) => setDataUser({ ...dataUser, phone: event.target.value })}
          name="phone" />

        <input type="text"
          className=" input"
          placeholder="Dirección:"
          value={dataUser.address}
          onChange={(event) => setDataUser({ ...dataUser, address: event.target.value })}
          name="address" />

        <input
          type="text"
          className="input"
          placeholder="DPI:"
          value={dataUser.DPI} onChange={(event) => setDataUser({ ...dataUser, DPI: event.target.value })}
          name="DPI" />

        <input type="text"
          className=" input1"
          placeholder="Tutor legal/Encargad@:"
          value={dataUser.tutor} onChange={(event) => setDataUser({ ...dataUser, tutor: event.target.value })}
          name="tutor" />

        <button  onClick={onSubmit}> Hola</button>
        <Link to="/step2" type='submit' className="form__submit">Siguiente</Link>
      </form>


    </>
  )
}
