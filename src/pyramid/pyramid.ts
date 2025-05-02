// Recursive solution
export function pyramid(n: number, row = 0, level = "") {
  if (row === n) {
    return;
  }
  const midpoint = Math.floor((2 * n - 1) / 2);

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  if (level.length >= midpoint - row && level.length <= midpoint + row) {
    level += "#";
  } else {
    level += " ";
  }
  return pyramid(n, row, level);
}
// export function pyramid(n: number) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (col >= midpoint - row && col <= midpoint + row) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }
