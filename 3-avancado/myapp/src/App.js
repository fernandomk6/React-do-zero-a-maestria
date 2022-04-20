import './App.css';
import { useState } from 'react';
// components
import Island from './components/Island';
import Desert from './components/Desert';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import ExecutarFuncao from './components/ExecutarFuncao';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const userAge = 23;
  const carros = [
    {
      marca: "toyota",
      modelo: "cbf5000",
      cor: "preto",
      ano: 2016,
      km: 1000
    },
    {
      marca: "ferrari",
      modelo: "top00",
      cor: "braco",
      ano: 2026,
      km: 1000
    },
    {
      marca: "tesla",
      modelo: "XT5000",
      cor: "escalate",
      ano: 3000,
      km: 0
    },
  ];
  const pessoas = [
    {
      id: 1,
      nome: "fernando",
      idade: 23,
      proficao: "suporte tecnico"
    },
    {
      id: 2,
      nome: "Fela",
      idade: 17,
      proficao: "consultor"
    },
    {
      id: 3,
      nome: "helenice",
      idade: 44,
      proficao: "confeiteira"
    },
    {
      id: 4,
      nome: "manoel",
      idade: 46,
      proficao: "metalúrgico"
    }
  ];

  function showMessage(msg) {
    alert(msg);
  }

  const [message, setMessage] = useState("mesagem padrão do sistema");

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  
  return (
    <div className="App">
      <h1>Avançado em React</h1>
      <Island />
      <Desert />
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="fernando" age={userAge} />
      <CarDetails 
        marca="ferrari" 
        modelo="x66flex"
        cor="preto"
        ano={2025} 
        km={0} 
      />
      {/* teste maluco com props */}
      {carros.map((carro, indice) => {
        return (
          <CarDetails 
            marca={carro.marca}
            modelo={carro.modelo}
            cor={carro.cor}
            ano={carro.ano}
            km={carro.km}
            key={indice}
          />
        );
      })}
      {/* children */}
      <Container msg="olá">
        <p>Esté é o conteudo</p>
        <strong>Strong</strong>
      </Container>
      {/* funções em props */}
      <ExecutarFuncao myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      <UserDetails pessoas={pessoas} />
    </div>
  );
}

export default App;
