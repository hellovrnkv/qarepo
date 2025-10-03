const URL = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error("Bad response: " + res.status);
  }
  return res.json();
}

function printUserNames(users) {
  const names = users.map((u) => u.name).join(", ");
  console.log("Users:", names);
}

(async () => {
  try {
    const users = await getUsers();
    printUserNames(users);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();
