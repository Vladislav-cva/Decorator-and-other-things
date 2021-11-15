
const a = { b: 1 }
const b = { b: 2 }

const c = {}



c[a] = 123; // c['object Obkect'] = 123
c[b] = 321 // c['object Obkect'] = 321

console.log(c[a]); // c['object Obkect'] == 321

const obj = {}

obj.c = 1
//
let a = 1
const fn = () => {
  
  a = 2;
  return;
  function a () {
    return 1
  }
}


fn();


console.log(a)

const arr = [1, 2]
const arr2 = arr

arr2[3] = 3;

console.log(arr);

const fn = (i) => {
  return {
      '1': 'test',
      '2': 'test1'
    }[i]
}

fn('1')

 // Композиция HOC 

 const fncompose = (...fns) => x => fns.reduceRight((acc, itemFn) => itemFn(acc), x);
   
 const myLowerCase = (str) =>  str.toLowerCase();

 const myConcat = (str) => `${str}!`;

 fncompose(
   myLowerCase,
   myConcat
 );

 const superFn = fncompose(carWithAcc, carWithMusic, carWithBeBep);
 

 //
class Car{
  constructor(){
      this.cost = function () {
          return 2000
      }
  }
};

function carWithAcc (car){
  car.acc = true;
  const prevCost = car.cost();

  car.cost = function (){
      return prevCost + 100;
  };

  return car

};

function carWithMusic (car){
  car.music = true;
  const prevCost = car.cost();

  car.cost = function () {
      return prevCost + 200
  };

  return car
}

function carWithBeBep (car){
  car.bebep = true;
  const prevCost = car.cost();

  car.cost = function () {
      return prevCost + 350
  };

  return car
}
//////////////////
const arr = [1, 2, [3, 4]]; // [1,2,3,4]

const myFlat = (data) => {
  return data.reduce((acc, item) => {
    return Array.isArray(item) ? [...acc, ...myFlat(item)] : [...acc, item]
  }, [])
}

////////////////
function sum (num){
  console.log(num);
  
  const fn = (x) => {
      num += x;
      console.log(num);

     return fn
  }
return fn

}

/////////////////////

let x = (function () {
  let c = 0;

  return function () {
     return c = c + 1
  }
})()

x() // 1
x() // 2

////////////
const arr = [1, 0, null, 2]
const res = arr.every(item => !item)

/////////////

const obj = {
  name: 'Vlad',
  getName() {
    this.name = 1
    const test = function () {
      
      return this.name
    }
    return test()
  }
}

obj.getName();

//////////////////

function Animal(name) {
    this.name = name
  }
  
  Animal.prototype.getName = function () {
    return this.name
  }
  
  
  function Rabbit() {
    Animal.call(this, 'Vasya')
  }
  
  
  Rabbit.prototype = Object.create(Animal.prototype);
  Rabbit.prototype.constructor = Rabbit;
  
  
  const rabbit = new Rabbit();


/////////// //
class Animal {
    constructor() {
      this.name = 'Vasya'
    }
  
    getName() {
      return this.name
    }
  }
  
  
  class Rabbit extends Animal {
    constructor() {
      super()
      this.age = 1
    }
  
    getName() {
      return `Hello ${super.getName()}`
    }
  }
  //////////////////
  const Animal = (function() {
    let a = 1;
    
    return {
      setA(f) {
        a = f
      },
      getA() {
        return a
      }
    }
  })()
  
  const a = Animal.getA();


