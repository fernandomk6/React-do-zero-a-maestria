import HookUseState from '../components/HookUseState';
import HookUseReducer from '../components/HookUseReducer';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <HookUseReducer />
      <HookUseState />
    </div>
  );
};

export default Home;