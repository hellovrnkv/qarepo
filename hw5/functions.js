function addElements(arr) {
  let total = typeof arr[0] === "number" ? 0 : "";
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

const numbers1 = [1, 2, 3, 4];
const numbers2 = [10, -5, 7];
const words1 = ["a", "b", "c"];
const words2 = ["Hello", " ", "World"];

console.log("numbers1 result ->", addElements(numbers1)); // 10
console.log("numbers2 result ->", addElements(numbers2)); // 12
console.log("words1 result   ->", addElements(words1));   // "abc"
console.log("words2 result   ->", addElements(words2));   // "Hello World"