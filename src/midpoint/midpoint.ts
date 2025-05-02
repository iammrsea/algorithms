import { LinkedList, Node } from "../linkedlist/linkedlist";

export function midpoint(list: LinkedList): Node {
  let node = list.getFirst();
  let fast = node;
  let slow = node;
  while (fast?.next && fast.next.next) {
    slow = slow?.next || null;
    fast = fast.next.next;
  }
  return slow!;
}
