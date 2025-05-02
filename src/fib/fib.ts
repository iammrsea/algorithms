export function fib(num: number, memo: Record<number, number> = {}): number {
  if (num < 2) {
    memo[num] = num;
    return num;
  }
  memo[num - 1] = memo[num - 1] ?? fib(num - 1, memo);
  memo[num - 2] = memo[num - 2] ?? fib(num - 2, memo);
  return memo[num - 1] + memo[num - 2];
  //[0,1,1,2]
  //   let i = 0;
  //   const fibSeries: number[] = [];
  //   while (i <= num) {
  //     if (i === 0) {
  //       fibSeries.push(0);
  //     } else if (i <= 2) {
  //       fibSeries.push(1);
  //     } else {
  //       const f = fibSeries[i - 1] + fibSeries[i - 2];
  //       fibSeries.push(f);
  //     }
  //     i++;
  //   }

  //   return fibSeries[num];
}
