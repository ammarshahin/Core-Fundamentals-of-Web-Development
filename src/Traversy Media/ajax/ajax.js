//! create event listener
document.getElementById("button").addEventListener("click", eventListener);

function eventListener() {
  // console.log("button Clicked");

  //! create xhr object
  let xhr = new XMLHttpRequest();

  //! open('method-type', 'url/ file path', async or not)
  xhr.open("Get", "sample.txt", true);

  //! onload method in the xhr object will be called upon the the status of the request is changed and will not run unless the ready state is 4
  xhr.onload = function () {
    if (this.status == 200) {
      document.getElementById("para").innerHTML = this.responseText;
    } else if (this.status == 404) {
      document.getElementById("para").innerHTML = "File Not Found";
    }
  };

  //! on ready state change method is called when the ready state is changed in the xhr object
  // xhr.onreadystatechange = function () {
  //   if (this.readyState == 4 && this.status == 200) {
  //     console.log(this.responseText);
  //   }
  // };

  //! on progress method is called when the ready state is on 3 >> used when the server hangs or waiting for something to be loaded
  // xhr.onprogress = function () {
  //   console.log(this.readyState); // will be called when the ready state is 3 exactly
  // };

  //! on error method is called when an error happens
  // xhr.onerror = function () {
  //   console.log("Request Error !!! ");
  // };

  //! send request
  xhr.send();
}
