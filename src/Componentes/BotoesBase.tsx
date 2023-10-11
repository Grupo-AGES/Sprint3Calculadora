//importando use state(metodo padrão do react)
import { useState } from 'react'
//importando o css
import './BotoesBase.css'
//importando o arquivo Resultado para usar como tag(import Nome que voce quer dar para a tag(por padrão se usa o nome do componete/arquivo correspondente) from 'caminho do arquivo')
import Resultado from './Resultado'
//importando o arquivo Historico para usar como tag(import Nome que voce quer dar para a tag(por padrão se usa o nome do componete/arquivo correspondente) from 'caminho do arquivo')
import Historico from './Historico'

//função geral do arquivo atual
function BotoesBase() {
  //variaveis que estão sendo usadas no use state(const [nome da variavel, função que seta o valor da variavel] = useState()), 
  //obs: o valor que fica dentro do parenteses depois do use state é o valor inicial padrão da variavel, '' é string, [''] é array de strings, '0' é string de numbers
  const [num, setNum] = useState('0')
  const [oldnum, setOldNum] = useState('0')
  const [operator, setOperator] = useState('')
  const [valoresClicados, setValoresClicados] = useState('')
  const [historico] = useState([''])
  const [resultado, setResultado] = useState('')

  //função que é ativada pelo click em algum dos numeros, o e é de event
  function inputNum(e: React.MouseEvent<HTMLButtonElement>) {
    //a variavel input pega o valor clicado no evento
    var input = e.target.value
    //se valoresClicados for 0 e o input não, setar valoresClicados como vazio
    if (valoresClicados === '0' && input !== '0') {
      setValoresClicados('');
    }
    //setNum é a função que modifica o valor de num(por use state), aqui esta sendo passado por paramentro uma arrow function que ve se o numero clicado anteriormente é apenas zero, se for ele muda o valor para o valor dado pelo input, se não ele concatena o valor clicado ao ja existente
    setNum((prevNum) => prevNum === '0' ? input : prevNum + input)
    //setValoresClicados é uma função que modifica o valor de valoresClicados(por use state), aqui esta sendo armazenado todos os valores e operadores clicados pelo usuario para renderizar na tela 
    setValoresClicados((prevValores) => prevValores + input)
  }

  //função para limpar os valores da tela
  function clear() {
    //aqui esta zerando todos os numeros, operadores e valores clicados anteriormente, para que se possa começar novas contas sem a interferencia dos valores anteriores
    setNum('0')
    setOldNum('0')
    setOperator('')
    setValoresClicados('')
    setResultado('')
  }

  //função que transforma o numero presente na tela em porcentagem
  function porcentage() {
    //aqui o resultado da transformação esta sendo salvo na variavel resultado em formato de string(String()), o parseFloat é uma função padrão do JS que transforma uma string ou string number em um numero que pode ter virgula 
    const resultado = String(parseFloat(num) / 100)
    //aqui é salvo o valor da variavel resultado, atraves das funções de use state, nas variaveis necessarias
    setNum(resultado)
    setValoresClicados(resultado + "%")
    setResultado(resultado + "%")
  }

  //função que muda o sinal do numero
  function changeSign() {
    //o numero é multiplicado por -1
    const resultado = String(parseFloat(num) * -1)
    setNum(resultado)
    setValoresClicados(resultado)
  }

  //função que pega o evento click nos operadores
  function operatorHandler(e: React.MouseEvent<HTMLButtonElement>) {
    //a variavel operatorInput pega o valor clicado no evento
    var operatorInput = e.target.value
    //salva o valor do operador por use state
    setOperator(operatorInput)
    //transforma o numero anterior ao operador em oldNum
    setOldNum(num)
    //zera num para entrar o novo valor
    setNum('0')
    //salva o oldNum e o operador nos valores clicados para mostrar na tela
    setValoresClicados((prevValores) => prevValores + operatorInput)
  }

  //função que calcula as operações basicas de matematica
  function calculate() {
    let resultado = ''
   
    //se o operador for divisao, divide
    if (operator === '÷') {
      //salva o resultado da divisão na variavel resultado 
      resultado = String(parseFloat(oldnum) / parseFloat(num))
    } else if (operator === '×') {
      resultado = String(parseFloat(oldnum) * parseFloat(num))
    } else if (operator === '-') {
      resultado = String(parseFloat(oldnum) - parseFloat(num))
    } else if (operator === '+') {
      resultado = String(parseFloat(oldnum) + parseFloat(num))
    }
    
    if(valoresClicados.includes('%')){
      historico.push(valoresClicados)
    }else{
     historico.push(valoresClicados + ' = ' + resultado) 
    }
    console.log(historico)
    setValoresClicados(resultado)
    setNum(resultado)
    console.log(resultado)
    setResultado(resultado)
    setOperator('')
  }

  //return da função geral do arquivo/componete atual
  return (
    <div className='bodyBase'>
      <div className="bodyBotoes">
      {/* por padrão do react, o que esta dentro das tags html entre { } é lido como javascript
      {valoresClicados || '0'} renderiza os valores clicados ou 0 */}
        <h1 className="valoresClicados">{valoresClicados || '0'}</h1>
        {/* quando clicado "onClick", o botão C aciona a função clear */}
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
        <Resultado resultado={resultado} />
        <Historico historico={historico} />
        {/* arrumar renderizacao historico das contas, atualmente: 6x41-2 */}
      </div>
    </div>
  )
}
export default BotoesBase