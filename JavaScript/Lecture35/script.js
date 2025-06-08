//Normal function
function add1(first, second){
  return first + second;
}
console.log(add1(4,6));

//Anonymous function
const add2= function(first,second){
  return first + second;
}
console.log(add2(4,9));

//Arrow function
const add3=(first, second) => {
  return first + second;
}
console.log(add3(8,9));

const square1 = num => num * num;

//Application with array
const numbers=[2, 4, 6, 8, 10];
let squares= numbers.map(function (num){
  return num * num;
});
let squares1 = numbers.map(num => num * num);

//Functions that return a function
const createDouble = () => {
  const double = (num) => {
    return num * 2;
  }
  return double;
}

const twice = createDouble();
console.log(twice(5));

console.log(createDouble()(4));

let createCouter = () => {
  let count= 0;
  return () => ++count;
}

let counter = createCouter();
console.log(counter());
console.log(counter());
console.log(counter());

(() => {
  let counter= 0;
  let increment = () => console.log(++counter);

  console.log('Start');
  increment();

  setTimeout(increment, 5000);

  console.log('End');
})();