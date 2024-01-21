// What are the possible ways to create objects in JavaScript.
/*
There are three main methods of creating an object in JavaScript:
1. Using Constructor Functions
2. Using Object Literals
3. Using Classes (ES6)
*/
// 1. Using Constructor Functions

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
let person1 = new Person("John", "Doe", 30);

// 2. Using Object Literals
const person2 = {
    FirstName: 'Dilip',
    LastName: 'Nayak'
};

// 3. Using Classes (ES6)
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
var Obj = new Person('Dilip', 23)

