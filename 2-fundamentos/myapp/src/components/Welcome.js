import Joker from "./Joker";
const Welcome = () => {

  const name = "Fernando Henrique";

  const secret = (p) => {
    if (p === "Fernando Henrique") {
      return (
        <em>É o fernandão</em>
      );
    } else {
      return (
        <em>Não é o Fernandão</em>
      );
    }
  };

  return (
    <div>
      <h2 className="title">Seja bem vindo {name}</h2>
      {secret(name)}
      <Joker />
    </div>
  );
};

export default Welcome;