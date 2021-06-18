const posts = [
  { title: "post one", body: "this is post one body" },
  { title: "post two", body: "this is post two body" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li> ${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      error ? reject("Error: Something went wrong!!") : resolve();
    }, 2000);
  });
}

// createPost({ title: "post three", body: "this is post three body" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

//! async => await

// async function init() {
//   await createPost({ title: "post three", body: "this is post three body" });
//   getPosts();
// }
// init();

//! async => await with fetch

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log("data :", data);
}
fetchUsers();

//! promise.all with fetch

// const promise1 = Promise.resolve("hello world!!");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log("values :", values)
// );
