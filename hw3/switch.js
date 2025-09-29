function calc(a, b, command) {
  let result;

  switch (command) {
    case "add":
      result = a + b;
      break;
    case "sub":
      result = a - b;
      break;
    case "mul":
      result = a * b;
      break;
    case "div":
      result = b !== 0 ? a / b : "Error: division by zero";
      break;
    case "pow":
      result = a ** b;
      break;
    default:
      result = "Unknown command";
  }

  console.log(`command=${command}, a=${a}, b=${b} -> result=${result}`);
}

// single run example
calc(8, 2, "add");

// batch of cases
const cases = [
  { a: 8, b: 2, cmd: "add" },
  { a: 8, b: 2, cmd: "sub" },
  { a: 8, b: 2, cmd: "mul" },
  { a: 8, b: 2, cmd: "div" },
  { a: 8, b: 0, cmd: "div" },
  { a: 2, b: 5, cmd: "pow" },
  { a: -4, b: 3, cmd: "add" },
  { a: 7, b: -2, cmd: "sub" },
  { a: -3, b: -3, cmd: "mul" },
  { a: 10, b: 3, cmd: "xxx" }
];

cases.forEach(({ a, b, cmd }) => calc(a, b, cmd));
