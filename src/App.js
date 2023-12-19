import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState ([
    {
      id: uuidv4(),
      nome: 'Contabíl',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Logística',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Produção',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Comercial',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Tecnologia da Informação',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Meio Ambiente',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Segurança do Trabalho',
      cor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito:false,
      nome: 'LUCAS MAGNO',
      cargo: 'Gerente Contabil',
      
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'GUILHERME SILVEIRA',
      cargo: 'Supervisor',
      
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'PAULO ANTÔNIO',
      cargo: 'Contador',
      
      time: times[0].nome
    },
    
    {
      id: uuidv4(),
      favorito:false,
      nome: 'JOÃO PAULO',
      cargo: 'Gerente',
      
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'BRUNA LIMA',
      cargo: 'Surpervisor',
     
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'LUCAS SILVEIRA',
      cargo: 'Analista',
      
      time: times[1].nome
    },
    
    {
      id: uuidv4(),
      favorito:false,
      nome: 'DANIEL MARTINS',
      cargo: 'Gerente',
      
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'LUCAS LIMA',
      cargo: 'Analista',
      
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'FERNANDO LOPES',
      cargo: 'Supervisor',
      
      time: times[2].nome
    },
   
    {
      id: uuidv4(),
      favorito:false,
      nome: 'BRUNO NASCIMENTO',
      cargo: 'Analista',
      
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'MARIA LIMA',
      cargo: 'Gerente',
      
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'JÚNIO SILVEIRA',
      cargo: 'Supervisor',
      
      time: times[3].nome
    },
    
    {
      id: uuidv4(),
      favorito:false,
      nome: 'VILSON SANTOS',
      cargo: 'Analista',
     
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'MARCOS LIMA',
      cargo: 'Gerente',
      
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome:  'RONALDO SILVEIRA',
      cargo: 'Supervisor',
      
      time: times[4].nome
    },
    
    {
      id: uuidv4(),
      favorito:false,
      nome: 'MARCOS ALVES',
      cargo: 'Analista',
      
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'ANDERSON LIMA',
      cargo: 'Gerente',
     
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'LINCON SILVEIRA',
      cargo: 'Supervisor',
      
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }


function mudarCorDoTime(cor, id) {
  setTimes(times.map(time => {
    if(time.id === id){
      time.cor = cor;
    }
    return time;
  }));
}

function cadastrarTime(novoTime){
setTimes([...times, {...novoTime, id: uuidv4() }])
}

function resoverFavorito (id){
setColaboradores(colaboradores.map (colaborador =>{
  if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
  return colaborador

}))
}

  return (
    <div>
      <Banner />
      <Formulario 
      cadastrarTime={cadastrarTime}
      times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
        <Time 
        aoFavoritar={resoverFavorito}
        mudarCor ={mudarCorDoTime}
        key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
