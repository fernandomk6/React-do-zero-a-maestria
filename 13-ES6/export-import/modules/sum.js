export function sumTwoNumbers(a, b) {
  return a + b;
}

export function sumThreeNumbers(a, b, c) {
  return a + b + c;
}

export default function sumAllNumbers(...allNumbers) {
  let result = 0;

  allNumbers.forEach(element => {
    result += element;
  });

  return result;
}