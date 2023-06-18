// What is a class: blueprint for creating objects with pre=defined properties
// and methods.

// Constructor: The method to create new instances of a class

// Encapsulation:

// Abstraction:

// Polymorphism:


// Student class example

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}

// the new operator will help create an instance of a class (which is just syntactic sugar for a user-defined object with a constructor function)

let firstStudent = new Student("Cormac", "Pujals");

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
}

