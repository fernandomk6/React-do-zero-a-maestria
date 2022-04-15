const Events = () => {

  const handleClickEvent = () => {
    alert("Não clique mais em mim. Eu não gostei!!");
  };

  return (
    <div>
      <div>
        <button onClick={handleClickEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => alert("function inline")}>Inline funcion</button>
      </div>
    </div>
  );
};

export default Events;