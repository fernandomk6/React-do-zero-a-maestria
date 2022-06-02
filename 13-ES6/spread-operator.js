// spread operator
// usado para atribuições, vai fazer uma iteração em cada item, de um array ou objeto
// exemplos
const arr1 = [ 1, 2, 3 ];
const arr2 = [ 4, 5, 6 ];

const arr3 = [...arr1, ...arr2];
// console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
// todos os itesm do arr1 foram iterados e atribuido ao array, assim também com o arr2

const obj1 = { name: 'fernando', age: 23 };
const obj2 = { developer: false };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { name: 'fernando', age: 23, developer: false }

// rest operator
function sumAll(...numbers) {
  let result = 0;
  numbers.forEach(element => {
    result += element;
  });
  return result;
}

// console.log(sumAll(1,2,3,4,5,6)); // 21

// rest operator vai sempre ser usado como argumento a ser esperado em uma função
// ele formará um array com todos os parametros que foram passados apos sua declaração
// function multiply(n, ...numbers){}
// multiply(1, 2,3,4,5,6)
// numbers será [ 2, 3, 4, 5, 6 ]
