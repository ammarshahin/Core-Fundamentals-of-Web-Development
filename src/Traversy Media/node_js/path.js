//! import a certain function from another file >> will not work on Node !!!
// import { funcInTheOtherFile } from "./anotherFile.js";
// funcInTheOtherFile();

//! Import an entire module's contents >> will not work on Node !!!
// import * as myFile from "./anotherFile.js";
// myFile.funcInTheOtherFile();

//! Path Node Tut
const path = require(`path`);
console.log(__filename); // this is preloaded with the current file (no node involved)
console.log(path.basename(__filename)); // this will give you just the basename of the current file
console.log(path.dirname(__filename)); // this will give the current dir that contains this file
console.log(path.extname(__filename)); // this will give the extension of this file
console.log(path.extname(`./node.html`)); // this will give the extension of any given file
console.log(path.parse(`./node.html`)); // this will give an object with all of the features of this file
console.log(path.parse(`./node.html`).name); // this will give an object with all of the features of this file
