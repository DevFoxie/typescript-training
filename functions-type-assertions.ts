function number(a:number, b:number) {
    return a + b;
}   

console.log(number(1,2));

class Animal {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log("I am an animal.");
    }
  }

class dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    speak() {
        console.log("I am a dog.");
    }
}

class cat extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    speak() {
        console.log("I am a cat.");
    }
}

let animal = new Animal("Animal", 42);
let dog1 = new dog("Rex", 3);
let cat1 = new cat("Felix", 2);

console.log(Animal);
console.log(dog1);
console.log(cat1);

