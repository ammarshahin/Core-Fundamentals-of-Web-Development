
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
