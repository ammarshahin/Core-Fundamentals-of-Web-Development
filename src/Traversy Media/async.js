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

function createPost(post, callback_function) {
  setTimeout(() => {
    posts.push(post);
    callback_function();
  }, 2000);
}

createPost({ title: "post three", body: "this is post three body" }, getPosts);
