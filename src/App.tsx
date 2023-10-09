import { useState } from 'react'
import './App.css'
import Header from './Componentes/HeaderMenu'
import Historico from './Componentes/Historico'
import BotoesBase from './Componentes/BotoesBase'
// import Resultado from './Componentes/Resultado'

function App() {
  const [valorDigitado, setValorDigitado] = useState('')

  return (
    <>
      <div className='bodyApp'>
        <Header />
        <div className='calculos'>
          {/* <input className='valorDigitado'>{valorDigitado}</input> */}
          <div className='botoes'>
            <BotoesBase />
          </div>
          <div className='Tela'>
            {/* <Resultado/> */}
          <Historico/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App