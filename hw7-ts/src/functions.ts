// src/functions.ts

// Перегрузки: если передали number[], вернём number; если string[] — вернём string
export function add(values: number[]): number;
export function add(values: string[]): string;

// Реализация — одна, со сужением типов во время исполнения
export function add(values: (number | string)[]): number | string {
  if (values.length === 0) {
    // Пустой массив: вернём нейтральное значение
    return 0; // по умолчанию считаем числовой кейс
  }

  const allNumbers = values.every(v => typeof v === "number");
  const allStrings = values.every(v => typeof v === "string");

  if (allNumbers) {
    return (values as number[]).reduce((sum, n) => sum + n, 0);
  }

  if (allStrings) {
    return (values as string[]).join("");
  }

  throw new Error("Array must contain only numbers OR only strings");
}

// --- Демонстрация ---
const nums: number[] = [10, 20, 30];
const words: string[] = ["QA", " ", "is", " ", "fun"];

console.log("add(nums)   ->", add(nums));   // 60
console.log("add(words)  ->", add(words));  // "QA is fun"
