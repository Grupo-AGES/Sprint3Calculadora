function Historico(props: {
  historico: string[];
}) {

  return (
    <>
        <h3 className="tituloHistorico">Histórico</h3>
        <div className="historico">
        <ul className="itensHistorico">
          {props.historico.map((item, i) => (
            <li className="itemHistorico" key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Historico;
