import './App.css'
import Numeros from './Componentes/Numeros'
import Operadores from './Componentes/Operadores'
import Header from './Componentes/Header'
import Tela from './Componentes/Tela'

function App() {

  // handleClear()

  return (
    <>
    <div className='bodyApp'>
      <Header/>
      <div className='botoes'>
     <Numeros/>
     <Operadores/>
     {/* <button onClick={handleClear}>C</button> */}
     </div>
     <Tela/>
     </div>
    </>
  )
}

export default App
