import './Resultado.css'

function Resultado() {

   eval(props : {
        clicados: string
      }){
      
      const {clicados}=props
return(<div className='resultado'></div>)
      }

    function Temperatura(props : {
        valorDigitado: number,
        valorSelecionado1: string,
        valorSelecionado2: string
      }){

  const { valorDigitado, valorSelecionado1, valorSelecionado2 } = props

        if (valorSelecionado1 === 'celsius' && valorSelecionado2 === 'kelvin') {
            return <div className="resultado">{valorDigitado + 273.15}</div>
          } else if (valorSelecionado1 === 'celsius' && valorSelecionado2 === 'fahrenheit') {
            return <div className="resultado">{(valorDigitado * 9 / 5) + 32}</div>
          } else {
            return <div className="resultado">Resultado não suportado</div>
          }
    }
}

export default Resultado