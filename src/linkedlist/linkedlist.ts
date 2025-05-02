export class Node<T = any> {
  next: Node<T> | null;
  constructor(public data: T, next?: Node<T> | null) {
    this.next = next || null;
  }
}

export class LinkedList<T = any> {
  head: Node<T> | null;
  constructor() {
    this.head = null;
  }
  insertFirst(data: T) {
    const node = new Node<T>(data, this.head);
    this.head = node;
  }
  size(): number {
    if (!this.head) {
      return 0;
    }
    let count = 1;
    let nextNode = this.head.next;
    while (nextNode) {
      count++;
      nextNode = nextNode.next;
    }
    return count;
  }
  getFirst(): Node<T> | null {
    return this.head;
  }
  getLast(): Node<T> | null {
    let lastNode = this.head;
    while (lastNode?.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    this.head = this.head?.next || null;
  }
  removeLast() {
    if (!this.head?.next) {
      this.head = null;
      return;
    }
    let node = this.head;
    while (node) {
      if (!node.next?.next) {
        node.next = null;
        break;
      }
      node = node.next;
    }
  }
  insertLast(data: T) {
    const lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = new Node(data);
      return;
    }
    this.head = new Node(data);
  }
  getAt(index: number): Node<T> | null {
    let node = this.head;
    let count = 0;
    let foundNode: Node<T> | null = null;
    while (node) {
      if (count === index) {
        foundNode = node;
        break;
      }
      node = node.next;
      count++;
    }
    return foundNode;
  }
  removeAt(index: number) {
    let nodeToRemove = this.getAt(index);

    const previousNode = this.getAt(index - 1);
    if (!previousNode) {
      this.head = nodeToRemove?.next || null;
      return;
    }
    if (!nodeToRemove) return;
    previousNode.next = nodeToRemove.next;
    nodeToRemove = null;
  }
  insertAt(data: T, index: number) {
    if (index > this.size()) {
      this.insertLast(data);
      return;
    }
    const previousNode = this.getAt(index - 1);
    if (!previousNode) {
      this.insertFirst(data);
      return;
    }
    const nodeAtPosition = this.getAt(index);
    previousNode.next = new Node(data, nodeAtPosition);
  }
  forEach(cb: (data: Node<T>, index: number) => void) {
    let node = this.head;
    let counter = 0;
    while (node) {
      cb(node, counter);
      node = node.next;
      counter++;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
