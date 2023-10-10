import './Historico.css'

function Historico(props :{
  historico: String;
}) {

  return (
    <>
      <div className="bodyHistorico">
          <h3>Histórico</h3>
          <ul>
while(i<historico.length){
            {props.historico[i]}
}
          </ul>
          <img className='lixo' src='/trash.png'></img>
        </div>
    </>
  );
}

export default Historico