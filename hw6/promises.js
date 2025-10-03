const URL = "https://jsonplaceholder.typicode.com/users";


function getUsers() {
  return fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Bad response: " + res.status);
      }
      return res.json(); // 1. у JSON
    });
}

// 2. JSON
function printUserNames(users) {
  const names = users.map((u) => u.name).join(", ");
  console.log("Users:", names);
}

// 4.then() + catch()
getUsers()
  .then(printUserNames)
  .catch((err) => console.error("Error:", err.message));
