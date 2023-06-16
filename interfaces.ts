interface Person {
    firstName: string;
    lastName: string;
    age: number;
    introduce(): any;
}

class Student implements Person {
    firstName: string;
    lastName: string;
    age: number;
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, I am ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
    }
}

let student1 = new Student("Hamza", "Karfa", 26);
student1.introduce();