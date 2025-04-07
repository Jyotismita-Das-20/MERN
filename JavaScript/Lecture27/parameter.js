function getSum(num1,num2){
  let sum=num1+num2;
  return sum;
}

console.log(getSum(2,3));

function sum(num1, num2){
  let add=num1+num2;
  return add;
}

let x=10,y=5;
console.log(`x: ${x}, y: ${y}`);
console.log(sum(x,y));
console.log(`x: ${x}, y: ${y}`);

function sum1(num3, num4){
  num3+=num4;
  return num3;
}

let p=10,q=5;
console.log(`x: ${p}, y: ${q}`);
console.log(sum1(p,q));
console.log(`x: ${p}, y: ${q}`);

let i=0;
while(i<5){
  console.log(i);
  i++;
}