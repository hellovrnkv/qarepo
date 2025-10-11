// src/functions.ts

export function add(values: number[]): number;
export function add(values: string[]): string;

export function add(values: (number | string)[]): number | string {
  if (values.length === 0) {
    return 0; 
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

const nums: number[] = [10, 20, 30];
const words: string[] = ["QA", " ", "is", " ", "fun"];

console.log("add(nums)   ->", add(nums));   // 60
console.log("add(words)  ->", add(words));  // "QA is fun"
