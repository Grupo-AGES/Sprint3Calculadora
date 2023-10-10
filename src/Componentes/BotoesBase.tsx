import { useState } from 'react'
import './BotoesBase.css'
import Resultado from './Resultado'
import Historico from './Historico'

function BotoesBase() {
  const [num, setNum] = useState('0')
  const [oldnum, setOldNum] = useState('0')
  const [operator, setOperator] = useState('')
  const [valoresClicados, setValoresClicados] = useState('')
  const [historico] = useState([''])
  const [resultadoFinal, setResultado] = useState('')

  function inputNum(e: React.MouseEvent<HTMLButtonElement>) {
    var input = e.target.value
    setNum((prevNum) => prevNum === '0' ? input : prevNum + input)
    setValoresClicados((prevValores) => prevValores + input)
  }

  function clear() {
    historico.push(valoresClicados)
    setNum('0')
    setOldNum('0')
    setOperator('')
    setValoresClicados('')
  }

  function porcentage() {
    const resultado = String(parseFloat(num) / 100)
    setNum(resultado)
    setValoresClicados(resultado + "%")
    setResultado(resultado)
  }

  function changeSign() {
    if (parseFloat(num) > 0) {
      const resultado = String(parseFloat(num)*-1)
      setNum(resultado)
      setValoresClicados(resultado)
    } else {
      const resultado = String(Math.abs(parseFloat(num)))
      setNum(resultado)
      setValoresClicados(resultado)
    }
  }

  function operatorHandler(e: React.MouseEvent<HTMLButtonElement>) {
    var operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum('0')
    setValoresClicados((prevValores) => prevValores + operatorInput)
  }

  //ESSA A FUNÇÃO QUE DA O RESULTADO, QUERO MANDAR ELE PRA OUTRO COMPONENTE
  function calculate() {
    if (operator === '÷') {
      const resultado = String(parseFloat(oldnum) / parseFloat(num))
      setNum(resultado)
      console.log(resultado)
      setResultado(resultado)
      return resultado
    } else if (operator === '×') {
      const resultado = String(parseFloat(oldnum) * parseFloat(num))
      setNum(resultado)
      console.log(resultado)
      setResultado(resultado)
      return resultado
    } else if (operator === '-') {
      const resultado = String(parseFloat(oldnum) - parseFloat(num))
      setNum(resultado)
      console.log(resultado)
      setResultado(resultado)
      return resultado
    } else if (operator === '+') {
      const resultado = String(parseFloat(oldnum) + parseFloat(num))
      setNum(resultado)
      console.log(resultado)
      setResultado(resultado)
      return resultado
    }
    setOperator('')
  }

  return (
    <div className='bodyBase'>
      <div className="bodyBotoes">
        <h1 className="valoresClicados">{valoresClicados || '0' || num}</h1>
        <button onClick={clear}>C</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={porcentage}>%</button>
        <button className="operador" onClick={operatorHandler} value="÷">
          ÷
        </button>
        <button className="numero" onClick={inputNum} value='7'>
          7
        </button>
            <button className="numero" onClick={inputNum} value='8'>
              8
            </button>
            <button className="numero" onClick={inputNum} value='9'>
              9
            </button>
            <button className="operador" onClick={operatorHandler} value="×">
            ×
            </button>
            <button className="numero" onClick={inputNum} value='4'>
              4
            </button>
            <button className="numero" onClick={inputNum} value='5'>
              5
            </button>
            <button className="numero" onClick={inputNum} value='6'>
              6
            </button>
            <button className="operador" onClick={operatorHandler} value="-">
              -
            </button>
            <button className="numero" onClick={inputNum} value='1'>
              1
            </button>
            <button className="numero" onClick={inputNum} value='2'>
              2
            </button>
            <button className="numero" onClick={inputNum} value='3'>
              3
            </button>
            <button className="operador" onClick={operatorHandler} value="+">
              +
            </button>
            <button className="numero" onClick={inputNum} value='0'>
              0
            </button>
            <button className="numero" onClick={inputNum} value={"."}>
              ,
            </button>
            <button className="operador" onClick={calculate}>
              =
            </button>
          </div>
          <div className='direitaBase'>
          <Resultado resultadoFinal={resultadoFinal}/>
          <Historico historico={historico}/> 
          {/* arrumar renderizacao historico das contas, atualmente: 6x41-2 */}
      </div>
      </div>
    )
  }
  export default BotoesBase