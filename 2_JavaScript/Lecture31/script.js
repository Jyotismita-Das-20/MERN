console.log('Call by value');
let c=10;
let d=c;
console.log(`c=${c}, d=${d}`);
c=15;
console.log(`c=${c}, d=${d}`);

console.log('Call by reference');
let x={myValue:10};
let y=x;
console.log(`x=${x.myValue},y=${y.myValue}`);
x.myValue=15;
console.log(`x=${x.myValue},y=${y.myValue}`);

function swap(a,b){
  console.log(`In Function: Before swap a=${a},b=${b}`);
  var temp=a;
  a=b;
  b=temp;
  console.log(`In Function: After swap a=${a},b=${b}`);
}

let m=10;
let n=20;
console.log(`Before swap m=${m},n=${n}`);
swap(m,n);
console.log(`After swap m=${m},n=${n}`);