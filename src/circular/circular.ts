import { LinkedList } from "../linkedlist/linkedlist";

export function circular(list: LinkedList) {
  let node = list.getFirst();
  let slow = node;
  let fast = node;
  let isCircular = false;
  while (fast?.next && fast.next.next) {
    slow = slow?.next || null;
    fast = fast.next.next;
    if (Object.is(fast, slow)) {
      isCircular = true;
      break;
    }
  }
  return isCircular;
}
