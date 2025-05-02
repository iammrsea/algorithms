import { Queue } from "../queue/queue";

export function weave(src1: Queue, src2: Queue): Queue {
  const q = new Queue();
  while (src1.peek() || src2.peek()) {
    if (src1.peek()) {
      q.add(src1.remove());
    }
    if (src2.peek()) {
      q.add(src2.remove());
    }
  }

  return q;
}
