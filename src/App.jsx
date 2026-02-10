import { useEffect, useState } from 'react'
import './App.css'
import BarraDePesquisa from './componentes/BarraDePesquisa'
import Filtro from './componentes/Filtro'
import Ordenacao from './componentes/Ordenacao'
import Sidebar from './componentes/Sidebar'
import Card from './componentes/Card'

function App() {
  const [dados, setDados] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [filtros, setFiltros] = useState([
    { id: crypto.randomUUID(), valor: 'frontend' },
    { id: crypto.randomUUID(), valor: 'programacao' }
  ]);

  function adicionarFiltro() {
    const termoNormalizado = termoPesquisa.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace('-','')

    if (!termoNormalizado) {
    setTermoPesquisa('')
    return
  }

   if (filtros.some(filtro => filtro.valor === termoNormalizado)) {
    setTermoPesquisa('')
    return
  }

  setFiltros([...filtros, { id: crypto.randomUUID(), valor: termoNormalizado }])

  setTermoPesquisa('')
  }

  useEffect(()=> {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then(resposta => resposta.json())
    .then(dados => setDados(dados))
  }, []);

  const dadosFiltrados = filtros.length === 0 ? dados : dados.filter (item => filtros.some(filtro => item.tags.includes(filtro.valor)));
   
  return (
    <div className='container'>
      <Sidebar />
      <div>
        <BarraDePesquisa 
          termoPesquisa={termoPesquisa}
          setTermoPesquisa={setTermoPesquisa}
          onEnter={adicionarFiltro}
        />
        <Filtro filtros={filtros} setFiltros={setFiltros}/>
        <Ordenacao />
        <ul className='lista-cards'>
          {dadosFiltrados.map(item => (
            <li key={item.id}>
              <Card 
              imagemUrl={item.imagem_capa}
              titulo={item.titulo}
              resumo={item.resumo}
              linhasDeCodigo={item.linhas_de_codigo}
              compartilhamentos={item.compartilhamentos}
              comentarios={item.comentarios}
              usuario={item.usuario}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
