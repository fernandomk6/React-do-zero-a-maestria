import { useState } from "react";

const ListRender = () => {

  const deleteRandom = () => {

    const randomNumber = Math.floor(Math.random() * 3);

    setUsers((prevUser) => {
      return prevUser.filter((user) => randomNumber !== user.id);
    });

  }

  const [list, setUsers] = useState([
    { id: 1, name: "Fernando", age: 21},
    { id: 2, name: "Henrique", age: 22},
    { id: 3, name: "Pontes", age: 23}
  ]);

  return (
    <div>
      <ul>
        {list.map((user) => {
          return (
          <li key={user.id}>{user.name}</li>
          );
        })}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;