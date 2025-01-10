function add(a: number, b: number): number {
  return a + b;
}

function addString(a: string, b: string): string {
  return a + b; // String concatenation
}

const numResult = add(5, 10); // Correct: adds two numbers
const strResult = addString('5', '10'); // Correct: concatenates two strings
console.log(numResult); // Output: 15
console.log(strResult); // Output: 510