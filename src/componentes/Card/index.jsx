import Code from'./assets/code.svg';
import Share from'./assets/share.svg';
import Chat from'./assets/chat.svg';
import './styles.css'


export default function Card({id, imagemUrl, titulo, resumo, linhas_de_codigo, compartilhamentos, comentarios, usuario}) {
    return (
        <article className='card'>
            <div className='card__imagem'>
                <img src={imagemUrl} alt='imagem do post' />
            </div>

            <div className='card__conteudo'>
                <div className='conteudo__texto'>
                    <h2>{titulo}</h2>
                    <p>{resumo}</p>
                </div>
            </div>

            <div className='card__rodape'>
                   <ul>
                    <li>
                        <img src={Code} alt='códigos'/>
                        <span className='rodape__numero'>{linhas_de_codigo}</span>
                    </li>
                    <li>
                        <img src={Share}alt='Compartilhamentos'/>
                        <span className='rodape__numero'>{compartilhamentos}</span>
                    </li>
                    <li>
                            <img src={Chat} alt='Comentários'/>
                            <span className='rodape__numero'>{comentarios}</span>
                    </li>
                </ul> 
                
                <div className='rodape__usuario'>
                    <img src={usuario.imagem} alt='Imagem do usuário'/>
                    {usuario.nome}
                </div>               
            </div>
        </article>
    )
}