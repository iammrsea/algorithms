import { steps } from "./steps";
import { test, expect, vi, beforeEach, afterEach, MockInstance } from "vitest";

let log: MockInstance;
beforeEach(() => {
  log = vi.spyOn(console, "log");
});

afterEach(() => {
  vi.resetAllMocks();
});

test("steps is a function", () => {
  expect(typeof steps).toEqual("function");
});

test("steps called with n = 1", () => {
  steps(1);
  expect(log.mock.calls[0][0]).toEqual("#");
  expect(log.mock.calls.length).toEqual(1);
});

test("steps called with n = 2", () => {
  steps(2);
  expect(log.mock.calls[0][0]).toEqual("# ");
  expect(log.mock.calls[1][0]).toEqual("##");
  expect(log.mock.calls.length).toEqual(2);
});

test("steps called with n = 3", () => {
  steps(3);
  expect(log.mock.calls[0][0]).toEqual("#  ");
  expect(log.mock.calls[1][0]).toEqual("## ");
  expect(log.mock.calls[2][0]).toEqual("###");
  expect(log.mock.calls.length).toEqual(3);
});
