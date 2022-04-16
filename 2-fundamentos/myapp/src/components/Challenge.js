const Challenge = () => {

  let a = 1;
  let b = 2;
  let result;

  function soma(x, y) {
    result = x + y;
    let p = document.querySelector("#result");
    p.innerHTML = "O resultado é: " + result;
  }

  return (
    <div>
      <p id="result">Os numeros são {a} e {b} o resultado é: xxx</p>
      <button onClick={() => soma(a,b)}>exibir resultado</button>
      {result}
    </div>
    
  );
};

export default Challenge;