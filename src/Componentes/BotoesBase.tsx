//importando funções padrao react(use effect e use state)
import { useEffect, useState } from 'react'
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
  const [historico, setHistorico] = useState([''])
  const [resultado, setResultado] = useState('')
  const [parenthesisCount, setParenthesisCount] = useState(0)

  function handleParenthesis(e: React.MouseEvent<HTMLButtonElement>) {
   let parenteses = e.target.value
    if (parenteses === '(') {
      setParenthesisCount(parenthesisCount + 1);
    } else if (parenteses === ')' && parenthesisCount > 0) {
      setParenthesisCount(parenthesisCount - 1);
    }
  
    setValoresClicados((prevValores) => prevValores + parenteses);
  }

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

  //função que limpa o historico
  function clearHistory() {
    setHistorico([''])
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

  //função que calcula as operações basicas de matematica
  function calculate() {
    let resultado = ''
      // Encontre o índice do primeiro parêntese de abertura
      const indiceAbertura = valoresClicados.indexOf('(');
    if(indiceAbertura != -1) {
      // Encontre o índice correspondente do parêntese de fechamento
      let contadorParenteses = 1;
      let indiceFechamento = indiceAbertura;
      for (let i = indiceAbertura + 1; i < valoresClicados.length; i++) {
          if (valoresClicados[i] === '(') {
              contadorParenteses++;
          } else if (valoresClicados[i] === ')') {
              contadorParenteses--;
              if (contadorParenteses === 0) {
                  indiceFechamento = i;
                  break;
              }
          }
      }
  
      // Extraia a expressão dentro dos parênteses
      const expressaoDentro = valoresClicados.substring(indiceAbertura + 1, indiceFechamento);
      // Avalie a expressão dentro dos parênteses
      let resultadoDentro = ''
       //se o operador for divisao, divide
    if (operator === '÷') {
      //salva o resultado da divisão na variavel resultado 
      resultadoDentro = String(parseFloat((expressaoDentro.split(operator))[0]) / parseFloat((expressaoDentro.split(operator))[1]))
   resultado = String(parseFloat(resultadoDentro)/parseFloat(num))
    } else if (operator === '×') {
      resultadoDentro = String(parseFloat((expressaoDentro.split(operator))[0]) * parseFloat((expressaoDentro.split(operator))[1]))
   resultado = String(parseFloat(resultadoDentro)*parseFloat(num))
    } else if (operator === '-') {
      resultadoDentro = String(parseFloat((expressaoDentro.split(operator))[0]) - parseFloat((expressaoDentro.split(operator))[1]))
   resultado = String(parseFloat(resultadoDentro)-parseFloat(num))
    } else if (operator === '+') {
      resultadoDentro = String(parseFloat((expressaoDentro.split(operator))[0]) + parseFloat((expressaoDentro.split(operator))[1]))
   resultado = String(parseFloat(resultadoDentro)+parseFloat(num))
    } else if (operator === '^') {
    const base = parseFloat((expressaoDentro.split(operator))[0]);
    const exponent = parseFloat((expressaoDentro.split(operator))[1]);
    resultadoDentro = String(Math.pow(base, exponent))
    const base2 = parseFloat(resultadoDentro)
    const exponent2 = parseFloat(num)
    resultado = String(Math.pow(base2, exponent2))
    }
  } else {
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
    } else if (operator === '^') {
    const base = parseFloat(oldnum);
    const exponent = parseFloat(num);

    resultado = String(Math.pow(base, exponent));
    } else if (operator === 'log'){
        const numero = parseFloat(oldnum)
        const base = parseFloat(num)

        resultado = String(Math.log(numero)/Math.log(base))
    }
  }
    
    if(valoresClicados.includes('%')){
      historico.push('porcentagem de '+parseFloat(num)*100+ ' = '+valoresClicados)
    }else if(valoresClicados.includes('!')){
      let stringOriginal =valoresClicados
let novaString = stringOriginal.substring(0, stringOriginal.lastIndexOf('='));
console.log('nova string',novaString);

      historico.push(novaString )
    }else{
     historico.push(valoresClicados + ' = ' + resultado) 
    }
    console.log('historico',historico)
    setValoresClicados(resultado)
    setNum(resultado)
    console.log('reusltado sl',resultado)
    setResultado(resultado)
    setOperator('')
  }

  function backspace() {
    if (valoresClicados) {
      // Remove o último caractere da string dos valores clicados
      const novoValoresClicados = valoresClicados.slice(0, -1);
  
      // Atualiza os valores clicados e o visor
      setValoresClicados(novoValoresClicados);
  
      // Se o último caractere foi um operador, remova também o operador
      if (valoresClicados.endsWith('+') || valoresClicados.endsWith('-') || valoresClicados.endsWith('×') || valoresClicados.endsWith('÷') || valoresClicados.endsWith('^')) {
        setOperator('');
      }
  
      // Atualize o visor com o último caractere removido
      setNum(novoValoresClicados || '0');
    }
  }  
  
  function raizQuadrada() {
    if (parseFloat(num) >= 0) {
      const resultado = String(Math.sqrt(parseFloat(num)));
      setNum(resultado);
      setValoresClicados(`√${num}`);
      setOperator('');
    } else {
      // Lide com erros, como tentativa de calcular a raiz de um número negativo
      setResultado('Erro');
      setValoresClicados('Erro');
    }
  }

  function operatorHandler(e: React.MouseEvent<HTMLButtonElement>) {
  const operatorInput = e.target.value;
  
  // if (!valoresClicados.includes('+') && 
  //     !valoresClicados.includes('×') && 
  //     !valoresClicados.includes('÷') && 
  //     !valoresClicados.includes('^')) {
    
    //salva o valor do operador por use state
    setOperator(operatorInput)
    //transforma o numero anterior ao operador em oldNum
    setOldNum(num)
    //zera num para entrar o novo valor
    setNum('0')
    //salva o oldNum e o operador nos valores clicados para mostrar na tela
    setValoresClicados((prevValores) => prevValores + operatorInput)
  // }
}

function calculateFactorial() {
  const numToFactorial = parseFloat(num);

  // Verifique se o número é um inteiro não negativo
  if (Number.isInteger(numToFactorial) && numToFactorial >= 0) {
    const resultado = factorial(numToFactorial);
    setNum(resultado.toString());
    setValoresClicados(`factorial(${numToFactorial}) = ${resultado}`);
  } else {
    // Trate o erro, pois o fatorial é definido apenas para números inteiros não negativos
    setResultado('Erro');
    setValoresClicados('Erro');
  }
}

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function trigonometricFunction(operation: 'sin' | 'cos' | 'tan') {
  const numInRadians = (Math.PI / 180) * parseFloat(num);

  let result = 0;

  switch (operation) {
    case 'sin':
      result = Math.sin(numInRadians);
      break;
    case 'cos':
      result = Math.cos(numInRadians);
      break;
    case 'tan':
      result = Math.tan(numInRadians);
      break;
    default:
      return;
  }

  setNum(String(result));
  setValoresClicados(`${operation}(${num})`);
  setResultado(String(result));
}

function inputPi(){
  const pi = Math.PI;
  setNum(pi.toString());
  setValoresClicados((prevValores => prevValores + pi.toString()));

}
 
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const keyToValueMap: { [key: string]: string } = {
        'Digit7': '7',
        'Digit8': '8',
        'Digit9': '9',
        'Digit4': '4',
        'Digit5': '5',
        'Digit6': '6',
        'Digit1': '1',
        'Digit0': '0',
        'Digit2': '2',
        'Digit3': '3',
        'Period': '.'
      };

      const value = keyToValueMap[event.code];
      if (value !== undefined) {
        const input = value;
    setNum((prevNum) => prevNum === '0' ? input : prevNum + input)
    setValoresClicados((prevValores) => prevValores + input)
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  //return da função geral do arquivo/componete atual
  return (
    <div className='bodyBase'>
      <div className="bodyBotoes">
      {/* por padrão do react, o que esta dentro das tags html entre { } é lido como javascript
      {valoresClicados || '0'} renderiza os valores clicados ou 0 */}
        <h1 className="valoresClicados">{valoresClicados || '0'}</h1>
        <div className='todosBotoes'>
        <div className="primeirosBotoes">
          <div className='linha'>
        {/* quando clicado "onClick", o botão C aciona a função clear */}
        <button className="outrosBotoes" onClick={handleParenthesis} value='('>(</button>
        <button className="outrosBotoes" onClick={handleParenthesis} value=')'>)</button>

        <button className='outrosBotoes' onClick={clear}>C</button>
        <button className='outrosBotoes' onClick={changeSign}>+/-</button>
        <button className='outrosBotoes' onClick={porcentage}>%</button>
        <button className="operador" onClick={operatorHandler} value="×">
          ×
        </button>
        
        </div>
        <div className='linha'>
        <button className="outrosBotoes" onClick={() => trigonometricFunction('sin')}>sin</button>        
        <button className="outrosBotoes" onClick={operatorHandler} value='^'>^</button>
        <button className="numero" id='primNum' onClick={inputNum} value='9'>
          9
        </button>
        <button className="numero" onClick={inputNum} value='8'>
          8
        </button>
        <button className="numero" onClick={inputNum} value='7'>
          7
        </button>
        <button className="operador" onClick={operatorHandler} value="÷">
          ÷
        </button>

        </div>
        <div className='linha'>
        <button className="outrosBotoes" onClick={() => trigonometricFunction('cos')}>cos</button>
        <button className="outrosBotoes" onClick={(raizQuadrada)}>√</button>
        <button className="numero" onClick={inputNum} value='6'>
          6
        </button>
        <button className="numero" onClick={inputNum} value='5'>
          5
        </button>
        <button className="numero" onClick={inputNum} value='4'>
          4
        </button>
        <button className="operador" onClick={operatorHandler} value="-">
          -
        </button>

        </div>
        <div className='linha'>
        <button className="outrosBotoes" onClick={() => trigonometricFunction('tan')}>tan</button>
        <button className="outrosBotoes" onClick={operatorHandler} value='log'>log</button>
        <button className="numero" onClick={inputNum} value='3'>
          3
        </button>
        <button className="numero" onClick={inputNum} value='2'>
          2
        </button>
        <button className="numero" onClick={inputNum} value='1'>
          1
        </button>
        <button className="operador" onClick={operatorHandler} value="+">
          +
        </button>

        </div>
        <div className='linha'>
        <button className="outrosBotoes" onClick={() => inputPi()}>π</button>
        <button className="outrosBotoes" onClick={calculateFactorial}>n!</button>
        <button className="numero" onClick={inputNum} value='0'>
          0
        </button>
        <button className="numero" onClick={inputNum} value={"."}>
          ,
        </button>
        <button className='apagar' onClick={backspace}>⌫</button> 
        <button className="igual" onClick={calculate}>
          =
        </button>

        </div>
          </div>
          </div>
          </div>
      <div className='direitaBase'>
        <Resultado resultado={resultado} />
        <div className="historico">
        <Historico historico={historico} />
        <button onClick={clearHistory} className='lixo'>🗑️</button>
      </div>
      </div>
    </div>
  )
}
export default BotoesBase
