import "./GameOver.css";

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h2>Fim de jogo</h2>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Reiniciar</button>
    </div>
  );
};

export default GameOver;