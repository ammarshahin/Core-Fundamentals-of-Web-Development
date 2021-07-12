const url = require(`url`);

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

console.log(myUrl); // complete object

// serialized url
console.log(myUrl.href); // === console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Host name
console.log(myUrl.hostname);

//! Add param
myUrl.searchParams.append("abc", `123`);
console.log(myUrl.searchParams); // print the search parameters

//* loop through the params
myUrl.searchParams.forEach((value, key) => console.log(`${key} : ${value}`));
