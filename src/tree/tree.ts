export class Node<T = any> {
  children: Node<T>[];
  constructor(public data: T) {
    this.children = [];
  }
  addChild(data: T) {
    const node = new Node(data);
    this.children.push(node);
  }
  removeChild(data: T) {
    this.children = this.children.filter((n) => n.data !== data);
  }
}
export class Tree<T = any> {
  root: Node<T> | null;
  constructor() {
    this.root = null;
  }
  traverseBF(cb: (node: Node<T>) => void) {
    if (!this.root) {
      return;
    }
    const queue: Node[] = [this.root];
    while (queue.length > 0) {
      const node = queue.shift()!;
      cb(node);
      if (node.children.length) {
        queue.push(...node.children);
      }
    }
  }
  traverseDF(cb: (node: Node<T>) => void) {
    if (!this.root) {
      return;
    }
    const queue: Node[] = [this.root];
    while (queue.length > 0) {
      const node = queue.shift()!;
      cb(node);
      if (node?.children.length) {
        queue.unshift(...node.children);
      }
    }
  }
}
