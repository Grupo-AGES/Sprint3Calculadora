import './Numeros.css'

function Numeros() {
  const Numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="bodyNumero">
      {Numbers.map((number) => (
        <button key={number} className="numero">
          {number}
        </button>
      ))}
    </div>
  );
}

export default Numeros