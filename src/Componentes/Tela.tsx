import './Tela.css'

function Tela() {

  return (
    <>
      <div className="bodyTela">
        <h2 className='resultado'></h2>
        <div className='historico'>
          <h3>Histórico</h3>
          <ul>
          </ul>
          <img src='./assets/trash.png'></img>
        </div>
      </div>
    </>
  );
}

export default Tela