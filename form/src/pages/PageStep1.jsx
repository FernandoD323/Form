import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { TextField } from '@mui/material';

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



  const [errorMessageName, setErrorMessageName] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessageDirection, setErrorMessageDirection] = useState("")

  const [validName, setValidName] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validDirection, setValidDirection] = useState(false)


  return (
    <>

      <form onSubmit={onSubmit} class="form img1">
        <h2 class="form__title">- Datos Personales - </h2>
        <hr className='form__hr' />



        <TextField item sx={{ mb: 2,mr:4}}
          type="text"
          label="Nombres"
          className="input"
          value={dataUser.names}
          onChange={(event) => {
            setDataUser({ ...dataUser, names: event.target.value })
            if (dataUser.names.length <= 1) {
              setErrorMessageName("Este parámetro es obligatorio y debe de contener más de 3 caracteres")
              setValidName(true)
            } else {
              setErrorMessageName("")
              setValidName(false)
            }
          }
          }
          name="names"
          error={validName}
          helperText={errorMessageName}
        />


        <TextField
          label="Apellidos"
          type="text"
          className=" input"

          value={dataUser.surnames}
          onChange={(event) => setDataUser({ ...dataUser, surnames: event.target.value })}
          name="surnames" />


        <TextField item sx={{ mb: 2,mr:4 }}
          label="Correo"
          type="text"
          className=" input"

          value={dataUser.email}
          onChange={(event) => {
            setDataUser({ ...dataUser, email: event.target.value })
            if (dataUser.email.length <= 1) {
              setErrorMessageEmail("Este parámetro es obligatorio y debe de contener más de 3 caracteres")
              setValidEmail(true)
            } else {
              setErrorMessageEmail("")
              setValidEmail(false)
            }
          }
          }
          error={validEmail}
          helperText={errorMessageEmail}
        />

        <TextField
          label="Teléfono"
          type="text"
          className=" input"
          
          value={dataUser.phone}
          onChange={(event) => setDataUser({ ...dataUser, phone: event.target.value })}
          name="phone" />

        <TextField item sx={{ mb: 2,mr:4 }}
          label="Dirección"
          type="text"
          className=" input"
          
          value={dataUser.address}
          onChange={(event) => {
            setDataUser({ ...dataUser, address: event.target.value })
            if (dataUser.address.length <= 1) {
              setErrorMessageDirection("Este parámetro es obligatorio y debe de contener más de 3 caracteres")
              setValidDirection(true)
            } else {
              setErrorMessageDirection("")
              setValidDirection(false)
            }
          }
          }
          error={validDirection}
          helperText={errorMessageDirection}
          name="address" />

        <TextField
          label="DPI"
          type="text"
          className="input"
         
          value={dataUser.DPI} onChange={(event) => setDataUser({ ...dataUser, DPI: event.target.value })}
          name="DPI" />

        <TextField item sx={{ mb: 3 }}
          label="Tutor legal/Encargad@"
          type="text"
          className=" input1"
          
          value={dataUser.tutor} onChange={(event) => setDataUser({ ...dataUser, tutor: event.target.value })}
          name="tutor" />


        <Link to="/step2" type='submit' className="form__submit">Siguiente</Link>
      </form>


    </>
  )
}
