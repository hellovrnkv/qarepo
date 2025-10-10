// src/arrow-functions.ts

type NumArray = number[];
type StrArray = string[];

// Формальные перегрузки
export function addArrow(values: NumArray): number;
export function addArrow(values: StrArray): string;

// Реализация
export function addArrow(values: (number | string)[]): number | string {
  if (values.length === 0) return 0;

  const isNum = values.every(v => typeof v === "number");
  const isStr = values.every(v => typeof v === "string");

  if (isNum) {
    return (values as number[]).reduce((acc, n) => acc + n, 0);
  }
  if (isStr) {
    return (values as string[]).join("");
  }
  throw new Error("Array must contain only numbers OR only strings");
}

// Дополнительные стрелочные помощники (ещё примеры типизации):
export const average = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
};

export const max = (arr: number[]): number => {
  if (arr.length === 0) return Number.NEGATIVE_INFINITY;
  return Math.max(...arr);
};

// --- Демонстрация ---
const nums: number[] = [2, 4, 6, 8];
const words: string[] = ["Type", "Script", " ", "rocks", "!"];

console.log("addArrow(nums)  ->", addArrow(nums));   // 20
console.log("addArrow(words) ->", addArrow(words));  // "TypeScript rocks!"
console.log("average(nums)   ->", average(nums));    // 5
console.log("max(nums)       ->", max(nums));        // 8
