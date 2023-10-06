import { useState } from 'react';
import './BotoesBase.css';

function BotoesBase() {
  const Numbers: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const Buttons: string[] = ['=', '+', '-', '×', '÷', '%'];
  //tirar o =

  const [clicados, setClicados] = useState('');

  const handleButtonClick = (value: string) => {
    setClicados((prevClicados) => prevClicados + value);
  };

  return (
    <div className="bodyBotoesBase">
      {Numbers.map((string) => (
        <button key={string} value={string} className="numeros" onClick={(e) => {handleButtonClick(e.target.value)}}>
          {string}
        </button>
      ))}
      {Buttons.map((string) => (
        <button key={string} value={string} className="botoesBase" onClick={(e) => {handleButtonClick(e.target.value)}}>
          {string}
        </button>
      ))}
      <div>
        <p>Clicados: {clicados}</p>
      </div>
    </div>
  );
}

export default BotoesBase;
