export class Node<T = any> {
  left: Node<T> | null;
  right: Node<T> | null;
  constructor(readonly data: T) {
    this.left = null;
    this.right = null;
  }
  insert(data: T) {
    const nodeToInsert = new Node(data);
    if (nodeToInsert.data > this.data) {
      this.#insertRight(nodeToInsert);
    } else {
      this.#insertLeft(nodeToInsert);
    }
  }
  contains(data: T): Node<T> | null {
    const node = new Node(data);
    if (node.data === this.data) {
      return node;
    }
    if (node.data > this.data) {
      return this.#constainsRight(node);
    }
    return this.#constainsLeft(node);
  }
  #constainsLeft(node: Node<T>): Node<T> | null {
    if (this.left === null) {
      return null;
    }
    if (this.left.data === node.data) {
      return node;
    }
    if (node.data > this.left.data) {
      return this.left.#constainsRight(node);
    }
    return this.left.#constainsLeft(node);
  }
  #constainsRight(node: Node<T>): Node<T> | null {
    if (this.right === null) {
      return null;
    }
    if (this.right.data === node.data) {
      return node;
    }
    if (node.data > this.right.data) {
      return this.right.#constainsRight(node);
    }
    return this.right.#constainsLeft(node);
  }
  #insertLeft(nodeToInsert: Node<T>) {
    if (this.left === null) {
      this.left = nodeToInsert;
      return;
    }
    if (nodeToInsert.data > this.left.data) {
      this.left.#insertRight(nodeToInsert);
    } else {
      this.left.#insertLeft(nodeToInsert);
    }
  }
  #insertRight(nodeToInsert: Node<T>) {
    if (this.right === null) {
      this.right = nodeToInsert;
      return;
    }
    if (nodeToInsert.data > this.right.data) {
      this.right.#insertRight(nodeToInsert);
    } else {
      this.right.#insertLeft(nodeToInsert);
    }
  }
}
