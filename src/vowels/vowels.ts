export function vowels(str: string) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
