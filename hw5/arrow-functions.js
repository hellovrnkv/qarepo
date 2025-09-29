const addElements = (arr) => {
  let total = typeof arr[0] === "number" ? 0 : "";
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
};

const nums = [5, 15, 25];
const mixNums = [100, 200, 300, -50];
const str = ["JS", "-", "FUN"];
const emoji = ["😀", "🚀", "🔥"];

console.log("arrow nums     ->", addElements(nums));     // 45
console.log("arrow mixNums  ->", addElements(mixNums));  // 550
console.log("arrow str      ->", addElements(str));      // "JS-FUN"
console.log("arrow emoji    ->", addElements(emoji));    // "😀🚀🔥"