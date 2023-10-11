function Historico(props: {
  historico: string[];
}) {
  return (
    <>
      <div className="bodyHistorico">
        <h3>Histórico</h3>
        <ul>
          {props.historico.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <img className='lixo' src='/trash.png' alt="Trash" />
      </div>
    </>
  );
}

export default Historico;
