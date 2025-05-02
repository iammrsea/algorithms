export function bubbleSort(arr: number[]) {
  const sortArray = [...arr];
  for (let i = 0; i < sortArray.length; i++) {
    for (let j = 0; j < sortArray.length - i; j++) {
      if (sortArray[j] > sortArray[j + 1]) {
        let tmp = sortArray[j];
        sortArray[j] = sortArray[j + 1];
        sortArray[j + 1] = tmp;
      }
    }
  }
  return sortArray;
}
export function selectionSort(arr: number[]) {
  const sortedArray = [...arr];
  for (let i = 0; i < sortedArray.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] < sortedArray[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      const tmp = sortedArray[indexOfMin];
      sortedArray[indexOfMin] = sortedArray[i];
      sortedArray[i] = tmp;
    }
  }
  return sortedArray;
}

export function mergeSort(arr: number[]) {
  if (arr.length < 2) {
    return arr;
  }
  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));
}

export function merge(left: number[], right: number[]) {
  const results: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift()!);
    } else {
      results.push(right.shift()!);
    }
  }
  results.push(...left, ...right);
  return results;
}

function splitArray(arr: number[]) {
  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  return [left, right] as const;
}
function mergeSortRight(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  const [left, right] = splitArray(arr);
  return merge(mergeSortLeft(left), mergeSortRight(right));
}
function mergeSortLeft(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  const [left, right] = splitArray(arr);
  return merge(mergeSortLeft(left), mergeSortRight(right));
}
