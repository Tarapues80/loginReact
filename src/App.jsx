import { useEffect, useState } from 'react'
import './App.css'
import Conversor from './Conversor.jsx'
import Usuarios from './Usuarios.jsx'
import Registro from './registro.jsx'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logueado, setLogueado] = useState(false)
  const [recargar, setRecargar] = useState(false)

  function cambiarUsuario(event) {
    setUsuario(event.target.value)
  }

  function cambiarClave(event) {
    setClave(event.target.value)
  }

  function recargarAhora() {
    setRecargar(!recargar)
  }

  async function ingresar() {
    const peticion = await fetch(`http://localhost:3000/login?usuario=${usuario}&clave=${clave}`, { credentials: 'include' })
    if (peticion.ok) {
      setLogueado(true)
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }

  async function validar() {
    const peticion = await fetch('http://localhost:3000/validar', { credentials: 'include' })
    if (peticion.ok) {
      setLogueado(true)
    }
  }

  useEffect(() => {
    validar()
  }, [])

  return (
    <>
      {logueado ? (
        <>
          <Registro recargarAhora = {recargarAhora}/>
          <Conversor />
          <Usuarios recargar = {recargar}/>
        </>
      ) : (
        <>
          <h1>Inicio de sesión</h1>
          <input type="text" id="usuario" value={usuario} onChange={cambiarUsuario} placeholder="Usuario" />
          <input type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} placeholder="Contraseña" />
          <button onClick={ingresar}>Iniciar sesión</button>
        </>
      )}
    </>
  )
}

export default App

