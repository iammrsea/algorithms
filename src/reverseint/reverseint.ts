export function reverseInt(num: number): number {
  return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
}
