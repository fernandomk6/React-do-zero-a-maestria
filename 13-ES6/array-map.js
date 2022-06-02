const myArray= [1,2,3];

const myNewArray = myArray.map((currentValue, index, array) => {
  return `currentValue ${currentValue}, indice ${index}, arrayOriginal ${array}}`;
});

console.log(myNewArray);