// destructuring pode ser usado em array e objetos
// a ideia é transformar os itens de um desses dados, em variaveis, de forma simplificada

// exemplo basico com array
const fruits = ['banana', 'maçã', 'melancia'];
const [f1, f2, f3] = fruits;
// console.log(f1); // banana

// exemplo com objetos
const user = {name: 'fernando', age: 23};
const {name: uName, uAge} = user;
// console.log(uName); // fernando
// a desestruturação de objetos, a variavel deve ter o mesmo nome da chave
// é possivel atribuir um 'apelido' a chave, com a sintaxe {name: newName}
// newName é a variavel e name é a chave do objeto 

// destructuring como parametros
const age = 20;
const getName = ({age: test}) => {
  return test;
};
// console.log(getName({age: age})); // 20

// mais testes
const names = ['fernando', 'larissa', 'pedro'];
const [n1, n2] = names;
// console.log(n1, n2); // fernando larissa
// a desestruturação de arrays, respeita a ordem dos indices