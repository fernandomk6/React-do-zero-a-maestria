import "./GameOver.css";

const GameOver = ({retry}) => {
  return (
    <div>
      <h2>Game Over</h2>
      <button onClick={retry}>Reiniciar</button>
    </div>
  );
};

export default GameOver;