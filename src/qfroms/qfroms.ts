import { Stack } from "../stack/stack";

export class Queue<T = any> {
  #stack: Stack;
  #queue: Stack;
  #mode: "queue" | "stack";

  constructor() {
    this.#stack = new Stack();
    this.#queue = new Stack();
    this.#mode = "stack";
  }
  add(value: T) {
    if (this.#mode === "queue") {
      while (this.#queue.peek()) {
        this.#stack.push(this.#queue.pop());
      }
    }
    this.#mode = "stack";
    this.#stack.push(value);
  }
  remove() {
    if (this.#mode === "queue") {
      return this.#queue.pop();
    }
    this.#switchToQueueMode();
    return this.#queue.pop();
  }
  peek() {
    if (this.#mode === "queue") {
      return this.#queue.peek();
    } else {
      this.#switchToQueueMode();
      return this.#queue.peek();
    }
  }
  #switchToQueueMode() {
    this.#mode = "queue";
    while (this.#stack.peek()) {
      this.#queue.push(this.#stack.pop());
    }
  }
}
