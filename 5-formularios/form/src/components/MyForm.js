import style from "./MyForm.module.css";
import {useState} from "react";

const MyForm = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
 
  console.log(name);
  console.log(email);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name + " " + email);
  }

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input onChange={handleName} type="text" name="name" placeholder="Insira seu nome" />
        </label>
        <label>
          <span>Email</span>
          <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="Insira seu email" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;