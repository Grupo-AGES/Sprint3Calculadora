import React, { useState } from 'react'
import './App.css'
import Numeros from './Componentes/Numeros'
import Operadores from './Componentes/Operadores'
import Header from './Componentes/Header'
import Tela from './Componentes/Tela'

function App() {
  const [valorDigitado, setValorDigitado] = useState('')
  const [valorSelecionado1, setValorSelecionado1] = useState('celsius')
  const [valorSelecionado2, setValorSelecionado2] = useState('kelvin')

  const optionValueChange = (e) => {
    setValorSelecionado1(e.target.value)
  }

  return (
    <>
      <div className='bodyApp'>
        <Header />
        <div className='calculos'>
          <div className='botoes'>
            <div className='selectTemp'>
              <select
                value={valorSelecionado1}
                onChange={optionValueChange}>
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
              </select>
              <select
                value={valorSelecionado2}>
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
              </select>
            </div>
            <Numeros />
            <Operadores />
          </div>
          <Tela {valorDigitado}/>
        </div>
      </div>
    </>
  )
}

export default App

