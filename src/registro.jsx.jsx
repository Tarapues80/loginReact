import { useEffect, useState } from 'react'
import './App.css'

function Registro(recargarAhora) {
  const [usuarioRegistro, setUsuarioRegistro] = useState('')
  const [claveRegistro, setClaveRegistro] = useState('')

  function cambiarUsuarioRegistro(evento) {
    setUsuarioRegistro(evento.target.value)
  }

  function cambiarClaveRegistro(evento) {
    setClaveRegistro(evento.target.value)
  }

  async function registrar() {
    const peticion = await fetch('http://localhost:3000/registro?usuario=' + usuarioRegistro + '&clave=' + claveRegistro, { credentials: 'include' })
    if (peticion.ok) {
      alert("Usuario resgistrado")
      recargarAhora()
    } else {
      alert('Usuario no resgitrado')
    }
  }
  
  useEffect(() => {
  }, [])

  return (
    <>
      <h1>Registrarse</h1>
      <input type="text" id="usuario" value={usuarioRegistro} onChange={cambiarUsuarioRegistro} placeholder="Usuario" />
      <input type="password" name="clave" id="clave" value={claveRegistro} onChange={cambiarClaveRegistro} placeholder="Contraseña" />
      <button onClick={registrar}>Registrarse</button>
    </>
  )
  
}
export default Registro;
