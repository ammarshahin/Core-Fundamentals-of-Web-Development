//! ****************** ES5 ***********************
function Person(person_name, dob) {
  this.person_name = person_name;
  this.dob = new Date(dob);

  //* functions (getters and setters)
  this.getName = () => this.person_name;
  this.getBirthYear = () => this.dob.getFullYear();
}

const p1 = new Person("ammar", "07-10-2001");

// console.log(p1.getName());
// console.log(p1.getBirthYear());

//! ****************** ES6 ***********************
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //* functions (getters and setters)
  getRadius = () => this.radius;
  setRadius = (r) => (this.radius = r);

  //! different ways to write a method

  getArea2 = function () {
    return 3.14 * this.radius * this.radius;
  };

  getArea3() {
    return 3.14 * this.radius * this.radius;
  }

  getArea = () => 3.14 * this.radius * this.radius;
}

let c1 = new Circle(10);
console.log("radius = ", c1.getRadius());
c1.setRadius(1);
console.log("radius = ", c1.getRadius());
console.log("Area = ", c1.getArea());
