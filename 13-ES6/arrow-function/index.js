let o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f());

let x = {prop: 22};

const arrow = () => {
  return this.prop;
};

x.arrow = arrow;

console.log(x.arrow());

