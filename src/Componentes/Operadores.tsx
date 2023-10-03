import './Operadores.css'

function Operadores() {
  const Operators: String[] = ['=', '+', '-', '×', '÷', '%'];

  return (
    <div className="bodyOperadores">
      {Operators.map((char, index) => (
        <button key={index} className="operadores">
          {char}
        </button>
      ))}
    </div>
  );
}

export default Operadores