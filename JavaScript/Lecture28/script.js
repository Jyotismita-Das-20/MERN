console.log("Multiplication table");
let num=prompt("Enter the number for which table has to be generated:");
let i =1;
while(i<=10) {
  console.log(`${num} X ${i}=${num*i}`);
  i++;
}

function reverseTheDigit(num){
  let result=0;
  for(;num>0;){
    let rem=num%10;
    console.log(rem);
    result=result * 10+rem;
    num=Math.floor(num/10);
  }
  return result;
}
console.log(reverseTheDigit(3487));
