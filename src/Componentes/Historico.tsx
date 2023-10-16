function Historico(props: {
  historico: string[];
}) {

  return (
    <>
          <h3 className="tituloHistorico">Histórico</h3>
        <ul className="itensHistorico">
          {props.historico.map((item, i) => (
            <li className="itemHistorico" key={i}>{item}</li>
          ))}
        </ul>
    </>
  );
}

export default Historico;
