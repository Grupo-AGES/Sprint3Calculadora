import { useState, useEffect } from "react"

function SelectTemp(props: {
  valoresClicados: string;
  resultadoConversao: (resultado: string) => void;
}) {
  const [valorSelecionado1, setValorSelecionado1] = useState('celsius')
  const [valorSelecionado2, setValorSelecionado2] = useState('kelvin')
  const [resultado, setConvertedValue] = useState(props.valoresClicados);

useEffect(() => {
  function calcularTemp(valorSelecionado1: string, valorSelecionado2: string, valoresClicados: string | Number) {
    // Converte valoresClicados to a number
    const numericValoresClicados = Number(props.valoresClicados);
  
    if (valorSelecionado1 === 'celsius' && valorSelecionado2 === 'kelvin') {
      setConvertedValue(numericValoresClicados + 273.15.toString());
    } else if (valorSelecionado1 === 'celsius' && valorSelecionado2 === 'fahrenheit') {
      setConvertedValue(((numericValoresClicados * (9 / 5)) + 32).toString());
    } else if (valorSelecionado1 === 'kelvin' && valorSelecionado2 === 'celsius') {
      setConvertedValue((numericValoresClicados - 273.15).toString());
    } else if (valorSelecionado1 === 'fahrenheit' && valorSelecionado2 === 'celsius') {
     setConvertedValue(((numericValoresClicados - 32) / (9 / 5)).toString());
    } else if (valorSelecionado1 === 'kelvin' && valorSelecionado2 === 'fahrenheit') {
     setConvertedValue((((numericValoresClicados - 273.15) * (9 / 5)) + 32).toString())
    } else if (valorSelecionado1 === 'fahrenheit' && valorSelecionado2 === 'kelvin') {
     setConvertedValue((((numericValoresClicados - 32) / (9 / 5)) + 273.15).toString())
    } else if (valorSelecionado1 === 'celsius' && valorSelecionado2 === 'celsius') {
     setConvertedValue(props.valoresClicados)
    } else if (valorSelecionado1 === 'fahrenheit' && valorSelecionado2 === 'fahrenheit') {
     setConvertedValue(props.valoresClicados)
    } else if (valorSelecionado1 === 'kelvin' && valorSelecionado2 === 'kelvin') {
     setConvertedValue(props.valoresClicados)
    } else {
     setConvertedValue('Resultado não suportado')
    }

    props.resultadoConversao(resultado);
  }

  
    calcularTemp(valorSelecionado1, valorSelecionado2, props.valoresClicados);
  }, [valorSelecionado1, valorSelecionado2, props.valoresClicados]);
  

  return (
    <div className='selectTemp'>
      <select
        value={valorSelecionado1}
        onChange={(e) => setValorSelecionado1(e.target.value)}>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
      </select>
      <select
        value={valorSelecionado2}
        onChange={(e) => setValorSelecionado2(e.target.value)}>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
      </select>
    </div>
  )
}

export default SelectTemp