import { useEffect, useState } from "react";
  
const HookUseEffect = () => {
  const [number, setNumber] = useState(1);
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    console.log("hook useEffect was executed");
  });

  useEffect(() => {
    console.log("useEffect without dependencies");
  }, []);

  useEffect(() => {
    console.log("useEffect with dependencies");
  }, [anotherNumber]);

  
  const changeSomething = () => {
    setNumber(number + 1);
  };
  
  return (
    <div>
      <h4>useEffect</h4>
      <p>number: {number}</p>
      <button onClick={changeSomething}>changeSomething</button>
      <p>anotherNumber: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>changeAnotherNumber</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;