//using constructor
function Student(name, age, course, roll){
  this.name= name;
  this.age= age;
  this.course= course;
  this.roll= roll;
}

let student1= new Student('Hari', 19, 'IT', 3);

console.log(student1);

//using class
// class Student(name, age, course, roll){
//   this.name= name;
//   this.age= age;
//   this.course= course;
//   this.roll= roll;
// }