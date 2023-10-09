import { useState } from 'react';
import './BotoesBase.css';

  function BotoesBase() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();
    let valoresClicados = '';
    
    function inputNum(e) {
      var input = e.target.value;
      valoresClicados.concat(input)
      if (num === 0) {
        setNum(input);
      } else {
        setNum(num + input);
      }
    }
  
    function clear() {
      setNum(0);
    }
  
    function porcentage() {
      setNum(num / 100);
    }
  
    function changeSign() {
      if (num > 0) {
        setNum(-num);
      } else {
        setNum(Math.abs(num));
      }
    }
  
    function operatorHandler(e) {
      var operatorInput = e.target.value;
      valoresClicados.concat(operatorInput)
      setOperator(operatorInput);
      setOldNum(num);
      setNum(0);
    }
  
    function calculate() {
      if (operator === "/") {
        setNum(parseFloat(oldnum) / parseFloat(num));
      } else if (operator === "X") {
        setNum(parseFloat(oldnum) * parseFloat(num));
      } else if (operator === "-") {
          console.log(oldnum)
          console.log(num)
          console.log(oldnum-num)
        setNum(parseFloat(oldnum) - parseFloat(num));
      } else if (operator === "+") {
        setNum(parseFloat(oldnum) + parseFloat(num));
      }
    }
  
    return (
      <div>
          <div className="bodyBotoes">
            <h1 className="resultado">{valoresClicados || num}</h1>
            <button onClick={clear}>C</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={porcentage}>%</button>
            <button className="operador" onClick={operatorHandler} value="/">
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
            <button className="operador" onClick={operatorHandler} value="X">
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
      </div>
    );
  }
  export default BotoesBase