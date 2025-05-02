import { Node } from "../bst/bst";

export function validate(node: Node<number>) {
  return (
    validateLeft(node.left, node.data) &&
    validateRight(node.right, node.data, null)
  );

  function validateLeft(node: Node<number> | null, max: number): boolean {
    if (node === null) {
      return true;
    }
    if (node.data > max) {
      return false;
    }
    return (
      validateLeft(node.left, node.data) &&
      validateRight(node.right, node.data, max)
    );
  }
  function validateRight(
    node: Node<number> | null,
    min: number,
    max: number | null
  ): boolean {
    if (node === null) {
      return true;
    }
    if (node.data < min) {
      return false;
    }
    if (max !== null && node.data > max) {
      return false;
    }

    return (
      validateLeft(node.left, node.data) && validateRight(node.right, min, null)
    );
  }
}
