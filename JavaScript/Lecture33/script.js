console.log('Object Equality');
let a={firstName:'Raju'};
let b=a;
let c={firstName:'Raju'};

console.log(a==b);
console.log(a===b);
console.log(a==c);
console.log(a===c);

let student1={
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

console.log(JSON.stringify(student1));

let student2={
  firstName:'Ranjan',
  lastName:'Dev',
  age:24,
  address:{
    household:10,
    road:'Abdul kalam Road',
    city:'Muzaffarnagar',
    state:'Uttar Pradesh',
  },
  subjects:['Maths','Science','English'],
  feesPaid:true,
};