// create event listener
document.getElementById("button").addEventListener("click", () => {
  console.log("button Clicked");

  // create xhr object
  let xhr = new XMLHttpRequest();

  // open('method-type', 'url/ file path', async or not)
  xhr.open("Get", "sample.txt", true);

  // onload method in the xhr object
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  };

  // send request
  xhr.send();
});
