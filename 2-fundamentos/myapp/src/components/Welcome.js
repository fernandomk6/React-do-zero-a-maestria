import Joker from "./Joker";
const Welcome = () => {

  const name = "Fernando Henrique";

  return (
    <div>
      <h2 className="title">Seja bem vindo {name}</h2>
      <Joker />
    </div>
  );
};

export default Welcome;