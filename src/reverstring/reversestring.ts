export function reverse(str: string) {
  let reversed = "";
  //   //   for (let i = str.length - 1; i >= 0; i--) {
  //   //     reversed += str[i];
  //   //   }
  //   let length = str.length - 1;
  //   while (length >= 0) {
  //     reversed += str[length];
  //     length--;
  //   }
  //   return reversed;
  //   return str.split("").reverse().join("");
  for (const c of str) {
    reversed = c + reversed;
  }
  return reversed;
}
