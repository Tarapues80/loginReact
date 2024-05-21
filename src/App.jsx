import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './Conversor'

function App() {
  //http://localhost:5173/
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logueado, setLogueado] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  function cambiarClave(evento) {
    setClave(evento.target.value)
  }

  function ingresar() {
    if (usuario === 'admin' && clave === 'admin') {
      alert('Iniciaste sesión')
      setLogueado(true)
    } else {
      alert('Usuario o contraseña incorrecto')
    }
  }

  return (
    <>
      {logueado ? (
        <>
            <Conversor />
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
export default App;
