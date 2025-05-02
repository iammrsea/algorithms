export function matrix(num: number): Array<Array<number>> {
  const results = initResult(num);
  let startRow = 0;
  let startColumn = 0;
  let endRow = num - 1;
  let endColumn = num - 1;
  let value = 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = value;
      value++;
    }
    startRow++;
    // Right corner
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = value;
      value++;
    }
    endColumn--;
    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = value;
      value++;
    }
    endRow--;
    // Left corner
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = value;
      value++;
    }

    startColumn++;
  }

  return results;
}

function initResult(num: number) {
  const results: Array<Array<number>> = [];
  for (let i = 0; i < num; i++) {
    results.push(Array(num).fill(0));
  }
  return results;
}
