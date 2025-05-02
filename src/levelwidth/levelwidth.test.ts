import { test, expect } from "vitest";
import { levelWidth } from "./levelwidth";
import { Node } from "../tree/tree";

test("levelWidth is a function", () => {
  expect(typeof levelWidth).toEqual("function");
});

test("levelWidth returns number of nodes at widest point", () => {
  const root = new Node(0);
  root.addChild(1);
  root.addChild(2);
  root.addChild(3);
  root.children[0].addChild(4);
  root.children[2].addChild(5);

  expect(levelWidth(root)).toEqual([1, 3, 2]);
});

test("levelWidth returns number of nodes at widest point", () => {
  const root = new Node(0);
  root.addChild(1);
  root.children[0].addChild(2);
  root.children[0].addChild(3);
  root.children[0].children[0].addChild(4);

  expect(levelWidth(root)).toEqual([1, 1, 2, 1]);
});
