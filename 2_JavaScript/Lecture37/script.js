let container= document.getElementById('container');
let button1= document.getElementById('button1');
let button2= document.getElementById('button2');
let button3= document.getElementById('button3');

container.addEventListener('click',function(){
  console.log(this.id);
});

button1.addEventListener('click', function(){
  console.log(this.id);
});

class Cat{
  constructor(name){
    this.name= name;
    this.leg= 4;
  }

  move(){
    console.log(`The cat is moving on ${this.leg} legs.`);
  }

  speak(){
    console.log(`${this.name} makes a noise.`);
  }
}

let simi= new Cat("simi");
simi.move();
simi.speak();

class Lion extends Cat{
  eat(){
    console.log(`${this.name} eats meat`);
  }
}

let simba= new Lion("simba");
simba.move();
simba.speak();
simba.eat();