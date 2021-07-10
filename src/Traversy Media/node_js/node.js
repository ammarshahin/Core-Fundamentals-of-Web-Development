//! import a certain function from another file >> will not work on Node !!!
// import { funcInTheOtherFile } from "./anotherFile.js";
// funcInTheOtherFile();

//! Import an entire module's contents >> will not work on Node !!!
// import * as myFile from "./anotherFile.js";
// myFile.funcInTheOtherFile();

//! Path Node Tut
// const path = require(`path`);
// console.log(__filename); // this is preloaded with the current file (no node involved)
// console.log(path.basename(__filename)); // this will give you just the basename of the current file
// console.log(path.dirname(__filename)); // this will give the current dir that contains this file
// console.log(path.extname(__filename)); // this will give the extension of this file
// console.log(path.extname(`./node.html`)); // this will give the extension of any given file
// console.log(path.parse(`./node.html`)); // this will give an object with all of the features of this file
// console.log(path.parse(`./node.html`).name); // this will give an object with all of the features of this file

//! FS Node Tut
const fs = require(`fs`);
const path = require(`path`);

//* Create a Directory
// Async call to mkdir method
fs.mkdir(path.join(__dirname, `/test`), {}, (e) => {
  if (e) throw e;
  else console.log("Directory Created Successfully");
});

//* Create and write to a file
// Async call to writeFile method >> overwrites the contents of the file
fs.writeFile(
  path.join(__dirname, `/test`, `hello.txt`),
  "HelloWorld!!",
  (e) => {
    if (e) throw e;
    else console.log("File Created Successfully");
  }
);

//* Read to a file
// Async call to writeFile method >> overwrites the contents of the file
fs.readFile(path.join(__dirname, `/test`, `hello.txt`), "utf8", (e, data) => {
  if (e) throw e;
  else console.log(data);
});

//* Rename a file
// Async call to writeFile method >> overwrites the contents of the file
fs.rename(
  path.join(__dirname, `/test`, `hello.txt`),
  path.join(__dirname, `/test`, `helloWorld.txt`),
  (e) => {
    if (e) throw e;
    else console.log("File Renamed!!!");
  }
);

//! IMPORTANT NOTE : these are all async functions >> meaning that their execution is not sequential!!!
