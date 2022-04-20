const ExecutarFuncao = ({ myFunction }) => {
  return (
    <div>
      <h2>Executar função</h2>
      <button onClick={() => myFunction("olá")}>Clique em mim por favor</button>
    </div>
  );
};

export default ExecutarFuncao;