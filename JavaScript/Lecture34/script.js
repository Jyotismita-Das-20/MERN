let obj={
  a:45,
  b:65,
  c:'Hello',
}

console.log('Obj',obj);
let objCopy= copyMyObject(obj);
console.log('Obj Copy', objCopy);
objCopy.a=100;
console.log('Obj',obj);
console.log('Obj Copy', objCopy);

function copyMyObject(obj){
  // let obj2=obj;
  // return obj2;

  let objString= JSON.stringify(obj);
  let obj2= JSON.parse(objString);
  return obj2
}