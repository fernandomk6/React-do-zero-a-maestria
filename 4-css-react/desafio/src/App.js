import './App.css';
import Cars from './components/Cars';

function App() {

  const cars = [
    {
      marca: "toyota",
      modelo: "corola",
      ano: "2018"
    },
    {
      marca: "pageout",
      modelo: "207",
      ano: "2022"
    },
    {
      marca: "renaut",
      modelo: "symbol",
      ano: "2008"
    },    {
      marca: "fiat",
      modelo: "uno",
      ano: "2020"
    }
  ];

  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          padding: "20px"
        }}
      >Desafio CSS React</h1>
      <Cars cars={cars} />
    </div>
  );
}

export default App;
