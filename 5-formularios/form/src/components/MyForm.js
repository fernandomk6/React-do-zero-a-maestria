import style from "./MyForm.module.css";
import {useState} from "react";

const MyForm = ({user}) => {

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user.bio ? user.bio : "");
  const [role, setRole] = useState();
 
 
  console.log(name);
  console.log(email);
  console.log(bio);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name + " " + email);
  }

  const handleTextarea = (e) => {
    setBio(e.target.value);
  }

  const handleSelect = (e) => {
    setRole(e.target.value);
  }
  alert(role);

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input onChange={handleName} value={name} type="text" name="name" placeholder="Insira seu nome" />
        </label>
        <label>
          <span>Email</span>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" placeholder="Insira seu email" />
        </label>
        <label>
          <span>Bio</span>
          <textarea onChange={handleTextarea} value={bio} name="bio"></textarea>
        </label>
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={handleSelect}>
            <option value="user">Usuário</option>
            <option selected value="adm">Administrador</option>
            <option value="ceo">CEO</option>
            <option value="driver">Motorista</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;