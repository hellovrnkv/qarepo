import { fetchUsers } from "./api";
import { dtoToPerson, toPersonCard } from "./transformers";

async function main() {
  try {
    const users = await fetchUsers();

    const persons = users.map(dtoToPerson);

    console.log("=== Persons (describe) ===");
    for (const p of persons.slice(0, 3)) {
      console.log(p.describe());
    }

    const cards = persons.slice(0, 3).map(toPersonCard);
    console.log("\n=== Cards (converted) ===");
    console.log(cards);

  } catch (e) {
    console.error("Error:", (e as Error).message);
    process.exitCode = 1;
  }
}

main();
