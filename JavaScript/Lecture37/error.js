let parseStringToJson = (jsonString) => {
  return JSON.parse(jsonString);
}

let obj={
  a:1,
  b:2,
  x:3,
}

let objString = JSON.stringify(obj);
console.log(objString);
let newObj = parseStringToJson(objString);
console.log(newObj);

let newObj2;
try{
  let newObj2 = parseStringToJson("{'A':1}");
}catch(error){
  console.log('Error occurs')
  console.log(error);
}
console.log(newObj2);
console.log('End');