import {useState} from 'react';
const HookUseState = () => {
  let username = "João";
  const [name, setName] = useState("Fernando");

  const changeName = () => {
    username = "João Marcelo";
    setName("Fernando Henrique");
  };

  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };

  return (
    <div>
      <h4>useState</h4>
      <p>Váriavel: {username}</p>
      <p>useState: {name}</p>
      <button onClick={changeName}>changeName</button>

      <p>Digite sua idade</p>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={age} onChange={(e) => setAge(e.target.value)} />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos</p>
      <hr />
    </div>
  );
};

export default HookUseState;