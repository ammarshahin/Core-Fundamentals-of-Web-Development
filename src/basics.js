// alert("Welcome to the Traversy Media  javascript crash course");
// console_test();
// variables_test();
// strings_test();
arrays_test();

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
