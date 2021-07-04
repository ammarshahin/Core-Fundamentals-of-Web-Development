document.getElementById("button").addEventListener("click", fetchUsers);

function fetchUsers() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      let user = JSON.parse(xhr.responseText); // single object
      // console.log("user :", user);

      let output = "";
      user.forEach((element) => {
        output += `<div class = "user">
                      <img src = "
                      ${element.avatar_url}
                      width + "70" height = "70"
                      <ul>
                        <li> ID: ${element.id} </li>
                        <li> name: ${element.login} </li>
                      </ul>
                  </div>`;
      });

      document.getElementById("users").innerHTML = output;
    }
  };

  xhr.send();
}
