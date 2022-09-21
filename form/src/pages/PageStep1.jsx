import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { TextField } from '@mui/material';
// import { number } from 'prop-types';

export const PageStep1 = ({ isDisable, setIsDisable, pagina1, setPagina1, dataUser, setDataUser }) => {

  const { names, surnames, email, phone, address, DPI, tutor } = useForm({
    names: '',
    surnames: '',
    email: '',
    phone: '',
    address: '',
    DPI: '',
    tutor: ''


  });




  const [errorMessageName, setErrorMessageName] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessageDirection, setErrorMessageDirection] = useState("")
  const [errorMessageTutor, setErrorMessageTutor] = useState("")
  const [errorMessagePhone, setErrorMessagePhone] = useState("")
  const [errorMessageDPI, setErrorMessageDPI] = useState("")

  const [validName, setValidName] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validDirection, setValidDirection] = useState(false)
  const [validTutor, setValidTutor] = useState(false)
  const [validPhone, setValidPhone] = useState(false)
  const [validDPI, setValidDPI] = useState(false)


  const onSubmit = (event) => {
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



        <TextField item sx={{ mb: 2, mr: 4 }}
          type="text"
          label="Nombres"
          required
          className="input"
          value={dataUser.names}
          onChange={(event) => {
            setDataUser({ ...dataUser, names: event.target.value })
            if (dataUser.names.length < 3) {
              setErrorMessageName("Este parámetro es obligatorio y debe de tener más de 3 caracteres")
              setValidName(true)
              setIsDisable("form__submit--disable")
              setPagina1("/step1")

            } else {
              setErrorMessageName("")
              setValidName(false)
              setIsDisable("form__submit")
              setPagina1("/step2")

            }
          }
          }
          name="names"
          error={validName}
          helperText={errorMessageName}
          if
        />


        <TextField
          label="Apellidos"
          type="text"
          className="input"

          value={dataUser.surnames}
          onChange={(event) => setDataUser({ ...dataUser, surnames: event.target.value })}
          name="surnames" />


        <TextField item sx={{ mb: 2, mr: 4 }}
          label="Correo"
          type="email"
          className="input"
          required
          value={dataUser.email}
          onChange={(event) => {
            setDataUser({ ...dataUser, email: event.target.value })
            if (dataUser.email.includes("@gmail.co") | dataUser.email.includes("@outlook.co")) {
              setErrorMessageEmail("")
              setValidEmail(false)
              setPagina1("/step2")
              setIsDisable("form__submit")

            } else {

              setErrorMessageEmail("Este parámetro debe tener una extensión: Ej: @gmail.com, @outlook.com")
              setValidEmail(false)
              setPagina1("/step1")
              setIsDisable("form__submit--disable")
            }
          }
          }
          error={validEmail}
          helperText={errorMessageEmail}
        />

        <TextField
          label="Teléfono"
          className=" input"
          value={dataUser.phone}
          onChange={(event) => {
            setDataUser({ ...dataUser, phone: event.target.value.replace(/\D/g, '') })
            if (dataUser.phone.length >= 8) {
              setErrorMessagePhone("Este parámetro no debe de tener un máximo de 8 caracteres, reingrese sus datos")
              setValidPhone(false)
              setPagina1("/step1")
              setIsDisable("form__submit--disable")
            } else {
              setErrorMessagePhone("")
              setValidPhone(false)
              setPagina1("/step2")
              setIsDisable("form__submit")
            }
          }
          }
          error={validPhone}
          helperText={errorMessagePhone}
          name="phone" />

        <TextField item sx={{ mb: 2, mr: 4 }}
          label="Dirección"
          type="text"
          className="input"
          required
          value={dataUser.address}
          onChange={(event) => {
            setDataUser({ ...dataUser, address: event.target.value })
            if (dataUser.address.length < 3) {
              setErrorMessageDirection("Este parámetro es obligatorio y debe de tener más de 3 caracteres")
              setValidDirection(true)
              setPagina1("/step1")
            } else {
              setErrorMessageDirection("")
              setValidDirection(false)
              setPagina1("/step2")
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

          value={dataUser.DPI}
          onChange={(event) => {
            setDataUser({ ...dataUser, DPI: event.target.value.replace(/\D/g, '') })
            if (dataUser.DPI.length >= 12) {
              setErrorMessageDPI("Este parámetro no debe de tener un máximo de 16 caracteres, reingrese sus datos")
              setValidDPI(false)
              setPagina1("/step1")
              setIsDisable("form__submit--disable")
            } else {
              setErrorMessageDPI("")
              setValidDPI(false)
              setPagina1("/step2")
              setIsDisable("form__submit")
            }
          }
          }
          error={validDPI}
          helperText={errorMessageDPI}
          name="DPI" />

        <TextField item sx={{ mb: 3 }}
          label="Tutor legal/Encargad@"
          type="text"
          className=" input1"
          required
          value={dataUser.tutor}
          onChange={(event) => {
            setDataUser({ ...dataUser, tutor: event.target.value })
            if (dataUser.tutor.length < 3) {
              setErrorMessageTutor("Este parámetro es obligatorio y debe de tener más de 3 caracteres")
              setValidTutor(true)
              setIsDisable("form__submit--disable")
              setPagina1("/step1")

            } else {
              setErrorMessageTutor("")
              setValidTutor(false)
              setIsDisable("form__submit")
              setPagina1("/step2")

            }
          }}
          error={validTutor}
          helperText={errorMessageTutor}
          name="tutor" />


        <Link to={pagina1} type='submit' className={isDisable}>Siguiente</Link>
      </form>


    </>
  )
}
