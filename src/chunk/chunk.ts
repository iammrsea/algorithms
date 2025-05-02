export function chunk(array: number[], size: number) {
  //   const numOfElements = Math.ceil(array.length / size);
  //   const chunks: Array<Array<number>> = [];
  //   for (let i = 0; i < numOfElements; i++) {
  //     const elementsChunked = chunks.length * size;
  //     const aSlice = array.slice(elementsChunked, elementsChunked + size);
  //     chunks.push(aSlice);
  //   }
  //   return chunks;
  const chunks: Array<Array<number>> = [];
  let index = 0;
  while (index < array.length) {
    chunks.push(array.slice(index, size + index));
    index += size;
  }
  return chunks;
  //   return array.reduce<Array<Array<number>>>((chunks, val) => {
  //     const lastChunk = chunks[chunks.length - 1];
  //     if (lastChunk && lastChunk.length < size) {
  //       lastChunk.push(val);
  //       chunks[chunks.length - 1] = lastChunk;
  //       return chunks;
  //     }
  //     chunks.push([val]);
  //     return chunks;
  //   }, []);
}
