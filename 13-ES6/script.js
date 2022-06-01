// exemplo de functions traducionais
const sum = function (a, b) {
  return a + b;
};

function teste(a) {
  return a;
}

// arrow function completa
const arrowSum = (a, b) => {
  return a + b;
};

// arrow function sem corpo. return implicito
const arrowSum2 = (a, b) => a + b;

// arrow function com apenas um parametro
const arrowSum3 = a => a + 1;

// arrow function sem nenhum parametro
const arrowSum4 = () => console.log('arrowSum3');

// arrow function e o this
const user = {
  name: 'fernando',
  sayUsername() {
    setTimeout(function() {
      console.log(this);
      console.log('o nome do usuario é ' + this.name);
    }, 1000);
  }
};

user.sayUsername();

