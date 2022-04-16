import { useState } from "react";

const ListRender = () => {

  const [list] = useState(["fernado", "pedro", "helenice", "manoel", "larissa"]);

  return (
    <div>
      <ul>
        {list.map((item, i) => {
          return (
          <li key={i}>{item}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListRender;