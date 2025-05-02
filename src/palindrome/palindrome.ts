export function palindrome(str: string) {
  return str === str.split("").reverse().join("");
}
