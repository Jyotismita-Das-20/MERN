let student={
  firstName:'Raju',
  lastName:'Kumar',
  age:20,
  address:{
    household:10,
    road:'MG Road',
    city:'Bangalore',
    state:'Karnataka',
  },
  subjects:['Maths','Science','English'],
  feesPaid:true,
};

function printName(argStudent){
  // let firstName=argStudent.firstName;
  // let lastName=argStudent.lastName;
  let {firstName,lastName}=argStudent;
  console.log('Name:',firstName,lastName);
}

printName(student);

//Spread
let obj1={
  a:45,
  x:90,
  hello:'world',
}

let even=[2, 4, 6, 8, 10];
console.log('Even',even);

let newEven=[...even]//spread

even.push(12);
console.log('Even',even);
console.log('newEven',newEven);
console.log(newEven.length);