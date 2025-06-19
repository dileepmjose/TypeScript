interface Person {
  name: string;
  age: number;
  greet(): void;
}

// Create a class that implements the interface
class Student implements Person {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Function that takes a Person and prints a message
function welcome(person: Person): void {
  person.greet();
}

// Create a student object
const student = new Student('Alice', 20);

// Call the function
welcome(student);
