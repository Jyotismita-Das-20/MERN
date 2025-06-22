let str="Hello";
console.log(str);

let str1="Everyone";
console.log(str1);

let str2=`Dear sir

Thank ypu

yours faithfully`;
console.log(str2);

let bossName=`John`;
let str3=`Dear ${bossName}, Thankyou

so much
for help me alot`;
console.log(str3);

let num=5;
let result;
if(num%2==0){
  result='Even';
}else{
  result='odd';
}
console.log(`The number is ${result}.`);

//Guard operator
let username='';
let defaultUsername='Guest';
let displayName=username||defaultUsername;
console.log(displayName);

//Default operators
let userAge=null;
let defaultAge=18;
let ageToDisplay=userAge??defaultAge;
console.log(ageToDisplay);

let day=2;
switch(day){
  case 1:
    day="Monday";
    break;
  case 2:
    day="Tuesday";
    break;
  case 3:
    day="Wednesday";
    break;
  case 4:
    day="Thursday";
    break;
  case 5:
    day="Friday";
    break;
  case 6:
    day="Saturday";
    break;
  case 7:
    day="Sunday";
    break;
  default:
    day="Invalid day";
}
console.log(day);
