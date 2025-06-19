// Create a class that implements the interface
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Student;
}());
// Function that takes a Person and prints a message
function welcome(person) {
    person.greet();
}
// Create a student object
var student = new Student('Alice', 20);
// Call the function
welcome(student);
