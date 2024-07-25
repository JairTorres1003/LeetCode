function convertNumber(mapping: number[], input: number): number {
  if (input === 0) {
    return mapping[0];
  }

  let output = 0;
  let multiply = 1;

  while (input > 0) {
    const digit = input % 10;
    output += mapping[digit] * multiply;
    input = Math.floor(input / 10);
    multiply *= 10;
  }

  return output;
}

function sortJumbled(mapping: number[], numbers: number[]): number[] {
  const mapped = numbers.map((v) => convertNumber(mapping, v));

  const order = numbers.map((_, i) => i);
  order.sort((a, b) => mapped[a] - mapped[b]);
  return order.map((index) => numbers[index]);
}

const mapping1 = [8, 9, 4, 0, 2, 1, 3, 5, 7, 6];
const numbers1 = [991, 338, 38];
console.time("sortJumbled");
console.log("Result:", sortJumbled(mapping1, numbers1));
console.timeEnd("sortJumbled");

const mapping2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers2 = [789, 456, 123];
console.time("sortJumbled2");
console.log("Result 2:", sortJumbled(mapping2, numbers2));
console.timeEnd("sortJumbled2");

const mapping3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const numbers3 = [0,1,2,3,4,5,6,7,8,9]
console.time("sortJumbled2");
console.log("Result 2:", sortJumbled(mapping3, numbers3));
console.timeEnd("sortJumbled2");
