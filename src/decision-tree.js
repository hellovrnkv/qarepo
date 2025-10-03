const age = 17;
const hasStudentId = true;
const isHoliday = false;

let price;

if (age < 6) {
  price = 0;
} else if (age <= 18 && hasStudentId) {
  price = 5;
} else if (age >= 65 || isHoliday) {
  price = 7;
} else {
  price = 10;
}

console.log(`Вік: ${age}, студентський: ${hasStudentId}, свято: ${isHoliday}`);
console.log(`Ціна квитка: ${price}€`);
