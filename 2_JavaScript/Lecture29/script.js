console.log("Hi"+4);
console.log("660"+44);
console.log("24"-8)

function getFactorial(num){
  if(num==1||num==0) return 1;
  let fact=getFactorial(num-1);
  return num*fact;
}
console.log(getFactorial(5));