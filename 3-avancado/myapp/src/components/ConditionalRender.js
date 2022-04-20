import { useState } from "react";

const ConditionalRender = () => {

  const [x] = useState(false);
  const [name, setName] = useState("João");

  return (
    <div>
      <h4>Testando condicional</h4>
      {/* opção 1 menos utilizada */}
      { x && <p>É verdadeiro abestadoooo</p>}
      { !x && <p>Era tudo uma grande armação :'(</p>}
      {/* opção 2, mais utilizada  */}
      <h4>If ternário</h4>
      { name === "Fernando" ? <p>Hellou Bixou</p> : 
        name === "João" ? <p>Olá {name}</p> :
        name === "Piruca" ? <p>Olá {name}</p> :
        <p>Então você é o {name}... não estava esperando por você..</p>
      }
      <p>Você é o {name}</p>
      <button onClick={() => setName("Fernando")}>Clique para chamar o bixo</button>
    </div>
  );

}

export default ConditionalRender;