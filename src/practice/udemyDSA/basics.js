// What is a class: blueprint for creating objects with pre=defined properties
// and methods.

// Constructor: The method to create new instances of a class

// Encapsulation:

// Abstraction:

// Polymorphism:


// Student class example

// class Student {
//   constructor(firstName, lastName, year) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.grade = year;
//   }
// }

// the new operator will help create an instance of a class (which is just syntactic sugar for a user-defined object with a constructor function)

// let firstStudent = new Student("Cormac", "Pujals");

// -> Student { firstName: "Cormac", lastName: "Pujals", grade: undefined }

// Instance methods: 


class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = []; 
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (tardies >= 3) return "YOU ARE EXPELLED!!!!!";
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score)
    return this.scores 
  }
  // challenge, implement add average score
  calculateAverage() {
    return this.scores.reduce((acc, cur) => acc + (cur / this.scores.length), 0);
  }
  // class methods: utility functions in a class that pertain to all instances of the class, 
  // e.g., adding a function to send a confirmation email that a student has been successfully enrolled
  static enrollStudents(...students) {
    return console.log("Enrolling students now...");
  }
}

let firstStudent = new Student("Connor", "Pujals", 16);
let secondStudent = new Student("Cormac", "Pujals", 17);


console.log(secondStudent);

secondStudent.addScore(50);
secondStudent.addScore(80);
secondStudent.addScore(80);
secondStudent.addScore(100);
secondStudent.addScore(100);

console.log(secondStudent.calculateAverage());

// class method called via the following code: 
Student.enrollStudents(firstStudent, secondStudent);


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    let xLength = a.x - b.x;
    let yLength = a.y - b.y;
    return Math.hypot(xLength, yLength);
  }
}

let p1 = new Point(5,5);
let p2 = new Point(12, 12);

console.log(Point.distance(p1, p2));

// class methods relate to all instances and instance methods are to be used for a specific instance of a class (and generally don't require data from other instances)