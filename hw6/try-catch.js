const BAD_URL = "https://jsonplaceholder.typicode.com/this-endpoint-does-not-exist";
const GOOD_URL = "https://jsonplaceholder.typicode.com/users";

async function robustFetch() {
  try {
  
    const bad = await fetch(BAD_URL);
    if (!bad.ok) {
      throw new Error("Bad URL response: " + bad.status);
    }
    return bad.json();
  } catch (firstError) {

    try {
      const good = await fetch(GOOD_URL);
      if (!good.ok) {
      
        throw new Error("Fallback failed: " + good.status);
      }
      return good.json();
    } catch (secondError) {
     
      throw new Error("Both requests failed: " + secondError.message);
    }
  }
}

(async () => {
  try {
    const data = await robustFetch();
    const first3 = data.slice(0, 3).map((u) => u.name).join(", ");
    console.log("OK, first 3 users:", first3);
  } catch (err) {
    console.error("Final error:", err.message);
  }
})();
