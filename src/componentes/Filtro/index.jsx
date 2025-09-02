import Close from './assets/close.svg'
import './styles.css'

export default function Filtro() {
    return(
        <section className="container-filtro">
            <ul>
                <li>
                    Front-end
                    <img src={Close} alt='Fechar'/>
                </li>
                <li>
                    Programação
                    <img src={Close} alt='Fechar'/>
                </li>
            </ul>

            <button>Limpar tudo</button>
        </section>
    )
}