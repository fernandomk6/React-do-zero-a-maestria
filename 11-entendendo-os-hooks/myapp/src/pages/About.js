import {useContext} from 'react';
import {SomeContext} from '../components/HookUseContext';

const About = () => {

  const {contextValue} = useContext(SomeContext);
  return (
    <div>
      <h2>About</h2>
      <h4>useContext</h4>
      <p>contextValue: {contextValue}</p>
      <hr />
    </div>
  );
};

export default About;