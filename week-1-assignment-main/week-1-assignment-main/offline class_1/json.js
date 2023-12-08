//json.parse: take string and convert it into object.

const user = '{"name": "Aditi", "age": "24"}'
let users = JSON.parse(user);
console.log(users["name"]);
console.log(user);

//json.stringify: converts objects to strings.

users = JSON.stringify(user);
console.log(users);
users = JSON.parse(users);
console.log(users);