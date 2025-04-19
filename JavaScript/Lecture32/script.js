console.log('Different methods of array');
let arr=[1,2,3,4,5,6,7,8,9];
let obj={};
console.log('is Array:',Array.isArray(arr));
console.log('is Array:',Array.isArray(obj));

console.log('To string:',arr);
arr.push(10);
console.log('To string:',arr);

//Use for-each loop
let foods=['bread', 'rice', 'meat', 'pizza'];
foods.forEach(function(item,i){
  console.log(item,i);
});

let newArr=arr.map(function(item){
  return item*item;
});

console.log('map:', newArr);

let user={
  firstName: 'Ram',
  lastName: 'Sharma',
  age: 28,
  email:'jyotismita2005@gmail.com',
  hobbies:['music','sports'],
};
console.log(user);

let userStr=JSON.stringify(user);
console.log(userStr);
console.log(typeof userStr);

console.log('using local storage');
localStorage.setItem('name','Kgcoding');