export function anagrams(str1: string, str2: string) {
  str1 = sanitizeInput(str1);
  str2 = sanitizeInput(str2);
  if (str1.length !== str2.length) {
    return false;
  }
  const str1Hist = createHistogram(str1);
  const str2Hist = createHistogram(str2);

  return Object.entries(str1Hist).every(
    ([char, count]) => str2Hist[char] === count
  );
}

function sanitizeInput(str: string) {
  return str.replace(/[^\w]/g, "").toLowerCase();
}

function createHistogram(str: string): Record<string, number> {
  return str.split("").reduce((hist, char) => {
    hist[char] = hist[char] + 1 || 1;
    return hist;
  }, {});
}
