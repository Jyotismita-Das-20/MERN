function hello(){
  return 'Hello World';
}

let str = hello();
console.log(str);
console.log(typeof str);

async function ola() {
  return 'Ola Mundo';
}

let str2 = ola();
console.log(str2);
console.log(typeof str2);
str2.then(data => console.log(data));