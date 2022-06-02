const user = [
  {name: 'fernando', available: true},
  {name: 'pedro', available: false},
  {name: 'maria', available: true},
  {name: 'ferroviario', available: false},
];

const checkUser = (user) => {
  if(user.available) {
    return true;
  }
};

const availableUser = user.filter(checkUser);
console.log(availableUser);