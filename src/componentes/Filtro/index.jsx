import Close from './assets/close.svg'
import './styles.css'

export default function Filtro({ filtros, setFiltros }) {

  function limparTudo() {
    setFiltros([])
  }

  function removerFiltro(filtroRemovido) {
    setFiltros (filtros.filter(filtro => filtro.id !== filtroRemovido))
  }

    return(
        <section className="container-filtro">
            <ul>
                {filtros.map((filtro) => (
                    <li key={filtro.id}>
                        {filtro.valor}
                        <img 
                        src={Close} 
                        alt='Fechar'
                        onClick={() => removerFiltro(filtro.id)} />
                    </li>
                ))}
            </ul>

            <button onClick={limparTudo}>Limpar tudo</button>
        </section>
    )

}