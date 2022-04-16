import './App.css';
// components
import TemplateExpressions from './components/TemplateExpressions';
import Header from './components/Header';
import Joker from "./components/Joker";
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div>
      <Header />
      <TemplateExpressions />
      <Joker />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
