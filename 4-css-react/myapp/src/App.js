import './App.css';
import Header from './components/Header';
import Title from './components/Title';

function App() {
  const n = true;
  return (
    <div className="App">
      <Header />
      {/* css inline */}
      <p 
        style={{
          padding: "20px 40px",
          color: "white",
          textAlign: "center",
          fontStyle: "italic"
        }}
      >
        Este elemento foi estilizado com CSS inline
      </p>
      {/* css inline dinamico */}
      <p
        style={n ? {
          color: "green"
        } : {
          color: "red"
        }}
      >
        Este elemento foi estilizado com CSS inline dinâminco
      </p>
      {/* css classe dinamica */}
      <p 
        className={n ? "strong-text" : "light-text"}
      >
        Este elemento foi estilizado com classe dinamica
      </p>
      {/* css modules */}
      <Title name="Fernando"/>
    </div>
  );
}

export default App;
