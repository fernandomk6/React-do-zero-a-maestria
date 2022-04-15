import './App.css';
// components
import TemplateExpressions from './components/TemplateExpressions';
import Header from './components/Header';
import Joker from "./components/Joker";
import Events from './components/Events';

function App() {
  return (
    <div>
      <Header />
      <TemplateExpressions />
      <Joker />
      <Events />
    </div>
  );
}

export default App;
