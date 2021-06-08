// alert("Welcome to the Traversy Media javascript crash course");
// console_test();
// variables_test();
// strings_test();
// arrays_test();
// object_literals();
// js_arrays();
js_loops();

function js_loops() {
  // for loop
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  // while loop
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }
}

function js_arrays() {
  let todo = [
    {
      id: 1,
      description: "study js and nodejs",
      isCompleted: false,
    },
    {
      id: 2,
      description: "study rust",
      isCompleted: false,
    },
    {
      id: 3,
      description: "get to work",
      isCompleted: false,
    },
  ];

  console.log(todo);

  // convert to jason string
  const todo_json = JSON.stringify(todo);
  console.log(todo_json);
}

function object_literals() {
  const person = {
    first_name: "Ammar",
    last_name: "Shahin",
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {
      city: "cairo",
      street: "bolak",
    },
  };

  // destruction an object
  const {
    first_name,
    last_name,
    address: { city },
  } = person;

  // add an element to the structure
  person.email = "ammar@gmail.com";
  console.log(person);
  console.log(first_name, last_name, city);
}

function arrays_test() {
  let arr1 = new Array(); // create an empty array with an constructor
  arr2 = ["Shahin", "a", 10, 4.5, true]; // create an array with initialize values >> note that in javascript an array can hold any number of elements and with different data types
  arr2.push(20); // push at the last element
  arr2.unshift("Ammar"); // push at the first element
  arr2.pop();
  console.log("arr :", arr2);

  // check if it's an array
  console.log(Array.isArray(arr2)); // true
  console.log(Array.isArray("ammar")); // false
  console.log(arr2.indexOf("Shahin")); // print the index of the element Shahin in the array and -1 if it wasn't found
}

function console_test() {
  // console output
  console.log("output");
  console.error("output");
  console.warn("output");
}

function variables_test() {
  const PI = 3.14; // PI is a constant value that cannot be reassigned
  let x = "ammar shahin"; // here x is a string
  x = 10; // an integer
  x = 4.5; // a float
  x = true; // boolean
  x = null;
  x = undefined;

  x = console.log("x :", x);
  console.log("x is", typeof x);
}

function strings_test() {
  const name = "Ammar Shahin";
  const age = 26;

  // concatenation
  console.log(`My name is ${name} and my age is ${age}`);
  // string length
  console.log(name.length);
  // string manipulation
  console.log(name.toUpperCase());
  console.log(name.split(" "));
  console.log(name.substring(0, 5).toUpperCase());
}
