import HookUseState from '../components/HookUseState';
import HookUseReducer from '../components/HookUseReducer';
import HookUseEffect from '../components/HookUseEffect';
import HookUseRef from '../components/HookUseRef'

import {useContext} from 'react';
import {SomeContext} from '../components/HookUseContext';

const Home = () => {
  const {contextValue} = useContext(SomeContext);

  return (
    <div>
      <h2>Home</h2>
      <HookUseRef />
      <h4>useContext</h4>
      <p>contextValue: {contextValue}</p>
      <hr />
      <HookUseEffect />
      <HookUseReducer />
      <HookUseState />
    </div>
  );
};

export default Home;