import { useState } from 'react'
import './App.css'
import Header from './Componentes/HeaderMenu'
import BotoesBase from './Componentes/BotoesBase'
// import Resultado from './Componentes/Resultado'

function App() {
  const [valorDigitado, setValorDigitado] = useState('')

  return (
    <>
      <div className='bodyApp'>
        <Header />
          {/* <input className='valorDigitado'>{valorDigitado}</input> */}
            <BotoesBase />
            {/* <Resultado/> */}
        </div>
    </>
  )
}

export default App