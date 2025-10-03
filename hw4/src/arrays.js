const arrStrings = ["apple", "banana", "cherry"];
const arrNumbers = [1, 2, 3, 4, 5];
const arrBooleans = [true, false, true];
const arrMixed = [1, "hello", true, null];

arrStrings.forEach((item, index) => {
  console.log("string item", index, "=", item);
});

arrNumbers.forEach((num, index) => {
  console.log("number item", index, "=", num);
});

arrBooleans.forEach((bool, index) => {
  console.log("boolean item", index, "=", bool);
});

arrMixed.forEach((val, index) => {
  console.log("mixed item", index, "=", val);
});

const doubledNumbers = arrNumbers.map(num => num * 2);
console.log("doubledNumbers =", doubledNumbers);

const upperStrings = arrStrings.map(str => str.toUpperCase());
console.log("upperStrings =", upperStrings);
