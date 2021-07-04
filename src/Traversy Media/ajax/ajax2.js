document.getElementById("button1").addEventListener("click", loadUser);
document.getElementById("button2").addEventListener("click", loadUsers);

function loadUser() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "user.json", true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      let user = JSON.parse(xhr.responseText); // single object
      document.getElementById("user").innerHTML = getObjectInListForm(user);
    }
  };

  xhr.send();
}

function loadUsers() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      let users = JSON.parse(xhr.responseText); // array of json objects
      users.forEach((element) => {
        let div = document.createElement("div");
        div.innerHTML = getObjectInListForm(element);
        document.body.appendChild(div);
      });
    }
  };

  xhr.send();
}

function getObjectInListForm(user) {
  let output = `
    <ul>
      <li>ID : ${user.id} </li>
      <li>Name : ${user.name} </li>
      <li>Email : ${user.email} </li>
    </ul>`;
  return output;
}
