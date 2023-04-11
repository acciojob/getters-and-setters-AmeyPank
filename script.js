// class Person {
//   constructor(name, age) {
//     this.name1 = name;
//     this.age1 = age;
//   }

//   get name() {
//     return this.name1;
//   }

//   set age(age) {
//     this.age = age1;
//   }
// }

// class Student extends Person {
//   study() {
//     console.log(`${this.name1} is studying`);
//   }
// }

// class Teacher extends Person {
//   teach() {
//     console.log(`${this.name1} is teaching`);
//   }
// }

// // Do not change the code below this line
// window.Person = Person;
// window.Student = Student;
// window.Teacher = Teacher;




//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }

  get age() {
    return this._age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching`);
  }
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;