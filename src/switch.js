const command = "sum"; // "sum" | "sub" | "mul" | "div" | "pow"
const a = 8;
const b = 2;

let result;

switch (command) {
  case "sum":
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
    result = "Невідома команда";
}

console.log(`Команда: ${command}, a=${a}, b=${b} -> Результат:`, result);
