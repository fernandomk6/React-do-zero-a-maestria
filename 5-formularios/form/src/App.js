import './App.css';

// components
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h1>Formularios com React</h1>
      <MyForm user={{name: "josias", email: "josias@gmail.com"}}/>
    </div>
  );
}

export default App;
