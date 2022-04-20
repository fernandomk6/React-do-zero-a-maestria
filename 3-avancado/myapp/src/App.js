import './App.css';
// components
import Island from './components/Island';
import Desert from './components/Desert';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';

function App() {
  const userAge = 23;
  
  return (
    <div className="App">
      <h1>Avançado em React</h1>
      <Island />
      <Desert />
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="fernando" age={userAge} />
    </div>
  );
}

export default App;
