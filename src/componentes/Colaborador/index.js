import './Colaborador.css';

const Colaborador = (props) => {
    return (
        <div className="colaborador">
            <div className="cabecalho">
                <img src='https://github.com/OliverRodrigues.png' alt={props.nome} />
            </div>
            <div className="rodape">
                <h4>Oliver Rodrigues</h4>
                <h5>Desenvolvedor Junior || Fullstack</h5>
            </div> 
        </div>
    );
}

export default Colaborador;