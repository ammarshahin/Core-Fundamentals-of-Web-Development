document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getUsers);
document.getElementById("button3").addEventListener("click", externalApi);
document.getElementById("addPost").addEventListener("submit", addPost);

let posts = [];

function addPost(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let post = {
        title: response.title,
        body: response.body,
      };

      posts.push(post);
      putElementsToPage(posts);
    });

  function putElementsToPage(response) {
    let output = "";
    response.forEach((element) => {
      output += `<div class = "user">
                  <h3>${element.title}</h3>
                  <p>${element.body}</p>
                </div>`;
    });

    document.getElementById("newPosts").innerHTML = output;
    document.getElementById("externalApi").innerHTML = "";
    document.getElementById("text").innerHTML = "";
    document.getElementById("users").innerHTML = "";
  }
}

function getText() {
  fetch("sample_text1.txt")
    .then((response) => response.text())
    .then((response) => {
      document.getElementById("text").innerHTML = response;
      document.getElementById("users").innerHTML = "";
      document.getElementById("externalApi").innerHTML = "";
    })
    .catch((err) => console.log("err :", err));
}

function getUsers() {
  fetch("users.json")
    .then((response) => response.json())
    .then(putElementsToPage)
    .catch((err) => console.log("err :", err));

  function putElementsToPage(response) {
    let output = "<h2>Users</h2>";
    response.forEach((element) => {
      output += `<div class = "user">
                <ul>
                  <li> ID: ${element.id} </li>
                  <li> name: ${element.name} </li>
                  <li> email: ${element.email} </li>
                </ul>
              </div>`;
    });

    document.getElementById("users").innerHTML = output;
    document.getElementById("text").innerHTML = "";
    document.getElementById("externalApi").innerHTML = "";
  }
}

function externalApi() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then(putElementsToPage)
    .catch((err) => console.log("err :", err));

  function putElementsToPage(response) {
    let output = "<h2>Posts</h2>";
    response.forEach((element) => {
      output += `<div class = "user">
                  <h3>${element.title}</h3>
                  <p>${element.body}</p>
                </div>`;
    });

    document.getElementById("externalApi").innerHTML = output;
    document.getElementById("text").innerHTML = "";
    document.getElementById("users").innerHTML = "";
  }
}
