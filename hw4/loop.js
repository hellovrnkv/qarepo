// for
for (let i = 0; i <= 9; i++) {
  console.log("for i =", i);
}

// for -10
for (let j = 100; j >= 0; j -= 10) {
  console.log("for j =", j);
}

// while
let k = 0;
while (k < 5) {
  console.log("while k =", k);
  k++;
}

// do...while
let m = 0;
do {
  console.log("do...while m =", m);
  m++;
} while (m < 3);

// for...of 
const arr = ["a", "b", "c"];
for (const item of arr) {
  console.log("for...of item =", item);
}

// for...in 
const obj = { name: "Eugene", age: 33, city: "Dnipro" };
for (const key in obj) {
  console.log("for...in", key, "=", obj[key]);
}
