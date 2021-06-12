// alert("Welcome to the Traversy Media javascript crash course");
// console_test();
// variables_test();
// strings_test();
// arrays_test();
// object_literals();
// js_arrays();
// js_loops();
// js_higherOrderFunctions();
// js_conditions();
js_functions();

function js_functions() {
  console.log(add_numbers(10, 20));
  console.log(add_numbers()); // with no default values >> will return NaN (Not a Number)

  //! Arrow function (note no need the return keyword)
  const singleLineFunction = (num1, num2) => num1 + num2;
  console.log(singleLineFunction(10, 20));
}

function add_numbers(num1 = 5, num2 = 5) {
  return num1 + num2;
}

function js_conditions() {
  let x = "10";

  //* if condition
  if (x == 10) console.log("x ==", x); // will give true for == >> matches the value only
  if (x === 10) console.log("x === 10 ", x); // and false for === >> matches the value and the datatype

  //* ternary operation
  //  condition ?  true :  false
  let y = x > 8 ? "red" : "blue";
  console.log("y :", y);

  //* switch statement
  switch (x) {
    case 8:
      y = "red";
      break;
    case 10:
      y = "blue";
      break;
    default:
      y = "Any";
      break;
  }
  console.log("y :", y);
}

function js_higherOrderFunctions() {
  let arr = [10, 20, 30];

  //* forEach iterates over each element of the array and do what's in the body of the callback function
  arr.forEach((element) => {
    console.log(element);
  });

  //* map iterate over an array and returns a new array with restricted conditions
  arr2 = arr.map((element) => {
    if (element == 10) {
      return element * 2;
    }
    return element;
  });

  arr3 = arr.filter((element) => {
    return element === 10;
  });

  console.log("arr :", arr);
  console.log("arr :", arr2);
  console.log("arr :", arr3);

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
      isCompleted: true,
    },
  ];

  const todoText = todo.forEach((element) => {
    console.log(element.description);
  });

  const todoIdArray = todo.map((element) => {
    return element.id;
  });
  console.log("todoIdArray :", todoIdArray);

  const todoCompleted = todo
    .filter((element) => {
      return element.isCompleted === true;
    })
    .map((element) => {
      return element.description;
    });
  console.log("todoCompleted :", todoCompleted);
}

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
  //! object_literals allow us to construct an object from a non existing class (create a class with only one object of it)
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
