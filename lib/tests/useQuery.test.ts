import { describe, afterEach,expect, test } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "../../src/App.tsx";


afterEach(cleanup);

describe("react-qwhy hooks =>", () => {
  test("Status of Environment", () => {
    expect(typeof window).not.toBe("undefined");
  });
  test("test useQuery hook", () => {
    const result = render(App);
    const someElement = result.container.querySelector("#cont");
    expect(someElement).toBeDefined();
  });
});
