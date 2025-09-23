const x = 7;
const y = "7";

console.log("x === y  ->", x === y); // true (тільки значення)
console.log("x === y ->", x === y); // false (значення + тип)

console.log("x > 5  ->", x > 5); // true
console.log("x < 5  ->", x < 5); // false
console.log("x <= 7 ->", x <= 7); // true

const age = 16;
const hasParent = true;

console.log("age >= 18 && hasParent ->", age >= 18 && hasParent); // false
console.log("age >= 18 || hasParent ->", age >= 18 || hasParent); // true
console.log("!hasParent ->", !hasParent); // false
