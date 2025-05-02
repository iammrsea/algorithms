export function maxChar(str: string) {
  const charByFrequency = str
    .split("")
    .reduce<Record<string, number>>((hist, v) => {
      hist[v] = hist[v] + 1 || 1;
      return hist;
    }, {});

  let max: [string, number] = ["", 0];

  Object.entries(charByFrequency).forEach(([char, frequency]) => {
    const [_, currMaxValue] = max;
    if (frequency > currMaxValue) {
      max = [char, frequency];
    }
  });
  return max[0];

  //   const counted: string[] = [];
  //   let maxNum = 0;
  //   let char = "";
  //   for (let i = 0; i < str.length; i++) {
  //     let c = str[i];
  //     if (counted.includes(c)) {
  //       continue;
  //     }
  //     counted.push(c);
  //     let freq = 1;
  //     for (let cc of str.slice(i + 1)) {
  //       if (cc == c) {
  //         freq++;
  //       }
  //     }
  //     if (freq > maxNum) {
  //       maxNum = freq;
  //       char = c;
  //     }
  //   }
  //   return char;
}
