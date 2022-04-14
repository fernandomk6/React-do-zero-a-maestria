// css
import './App.css';

// components
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="title">Fundamentos React</h1>
      </header>
      <FirstComponent/>
      <SecondComponent/>
    </div>
  );
}

export default App;
