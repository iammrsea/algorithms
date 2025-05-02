export class Stack<T = any> {
  #stack: Array<T>;
  constructor() {
    this.#stack = [];
  }
  push(value: T) {
    this.#stack.push(value);
  }
  pop() {
    return this.#stack.pop();
  }
  peek(): T | undefined {
    return this.#stack[this.#stack.length - 1];
  }
}
