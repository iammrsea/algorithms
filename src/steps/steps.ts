export function steps(n: number) {
  //   let step = 1;
  //   while (step <= n) {
  //     console.log("#".repeat(step).padEnd(n));
  //     // console.log(padEnd(repeat("#", step), n));
  //     step++;
  //   }
  //   for (let row = 1; row <= n; row++) {
  //     let str = "";
  //     for (let col = 1; col <= n; col++) {
  //       if (col <= row) {
  //         str += "#";
  //       } else {
  //         str += " ";
  //       }
  //     }
  //     console.log(str);
  //   }

  function drawStep(row: number) {
    if (row > n) {
      return;
    }
    let str = "";
    for (let col = 1; col <= n; col++) {
      if (col <= row) {
        str += "#";
      } else {
        str += " ";
      }
    }
    console.log(str);
    drawStep(row + 1);
  }
  drawStep(1);
}

// function repeat(str: string, num: number) {
//   let i = str.length;
//   let newString = str;
//   while (i < num) {
//     newString += str;
//     i++;
//   }
//   return newString;
// }
// function padEnd(str: string, num: number) {
//   let i = str.length;
//   while (i < num) {
//     str += " ";
//     i++;
//   }
//   return str;
// }
