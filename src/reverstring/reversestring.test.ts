import { reverse } from "./reversestring";
import { test, expect } from "vitest";

test("Reverse function exists", () => {
  expect(reverse).toBeDefined();
});

test("Reverse reverses a string", () => {
  expect(reverse("abcd")).toEqual("dcba");
});

test("Reverse reverses a string", () => {
  expect(reverse("  abcd")).toEqual("dcba  ");
});
