import "./styles.css"

export default function BarraDePesquisa({termoPesquisa,setTermoPesquisa,onEnter}) {

     function handleKeyDown(evento) {
    if (evento.key === 'Enter') {
      onEnter()
    }
  }

    return(
        <input 
        type='search' 
        placeholder="Digite o que você procura" 
        className="barra-pesquisa"
        value={termoPesquisa} 
        onChange={(evento) => setTermoPesquisa(evento.target.value)}
        onKeyDown={handleKeyDown}/>
    )
}