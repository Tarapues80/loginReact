import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Conversor() {
  //http://localhost:5173/
  const [textoAVoz, seTextoAVoz] = useState('')
  const [vozATexto, setvozATexto] = useState('')

  function cambiarTexto(evento) {
    seTextoAVoz(evento.target.value)
  }

  function convertirTextoAVoz() {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(textoAVoz)
    synth.speak(utterThis)
  }

  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'es-ES'
    recognition.start()
    recognition.onresult = function (event) {
      setvozATexto(event.results[0][0].transcript)
    }
  }

  return (
    <>
      <h1>Conversor TTS y STT</h1>
      <br />
      <br />
      <br />
      <h3>Conversor de texto a voz</h3>
      <input type="text" id="textoAvoz" value={textoAVoz} onChange={cambiarTexto} />
      <button onClick={convertirTextoAVoz}>Convertir</button>

      <h3>Conversor de voz a texto</h3>
      <button onClick={grabarVozATexto}>Grabar</button>
      <p>{vozATexto}</p>
    </>
  )
}
export default Conversor;
