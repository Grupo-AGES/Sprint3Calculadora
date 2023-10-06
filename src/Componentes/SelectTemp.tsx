import { useState } from "react"

function SelectTemp() {
  const [valorSelecionado1, setValorSelecionado1] = useState('celsius')
  const [valorSelecionado2, setValorSelecionado2] = useState('kelvin')

return(
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