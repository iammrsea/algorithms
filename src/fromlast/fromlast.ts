import { LinkedList, Node } from "../linkedlist/linkedlist";

export function fromLast(list: LinkedList, n: number): Node {
  let node = list.getFirst();
  let slow = node;
  let fast = node;
  // advance fast by n spaces
  for (let i = 0; i < n; i++) {
    fast = fast?.next || null;
  }
  while (fast?.next) {
    slow = slow?.next || null;
    fast = fast?.next;
  }
  return slow!;
}
