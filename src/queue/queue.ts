export class Queue<T = any> {
  #queue: Array<T>;

  constructor() {
    this.#queue = [];
  }
  add(value: T) {
    this.#queue.unshift(value);
  }
  remove() {
    return this.#queue.pop();
  }
  peek() {
    return this.#queue[this.#queue.length - 1];
  }
}
