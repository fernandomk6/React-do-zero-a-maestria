import {useRef, useEffect, useState} from 'react';

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  return (
    <div>
      <h4>useRef</h4>
      <p>o componente renderizou: {numberRef.current} vezes</p>

      <p>contador A: {counterA}</p>
      <button onClick={() => setCounterA(counterA + 1)}>contador A</button>

      <p>contador B: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>contador B</button>
      <hr />
    </div>
  );
};

export default HookUseRef;