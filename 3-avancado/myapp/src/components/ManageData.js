import { useState } from "react";

function ManageData() {
  // bad
  let someData = 10;
  function showData() {
    someData = 20;
    alert("o valor é" + someData);
  }

  // using useState
  let [n, setN] = useState(0);
  function showDataState() {
    setN(n + 35);
  }

  return (
    <div>
      <button onClick={showData}>Valor: {someData}</button>
      <button onClick={showDataState}>Valor: {n}</button>
    </div>
  )
}

export default ManageData