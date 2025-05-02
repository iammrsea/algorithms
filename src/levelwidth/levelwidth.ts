import { Node } from "../tree/tree";

export function levelWidth(root: Node): number[] {
  const counters = [0];
  const stopper = new Node("__stopper__");
  const queue: Node[] = [root, stopper];
  while (queue.length > 1) {
    const node = queue.shift()!;
    if (node.data === "__stopper__") {
      queue.push(stopper);
      counters.push(0);
      continue;
    }
    if (node.children.length) {
      queue.push(...node.children);
    }
    counters[counters.length - 1]++;
  }
  return counters;
}
