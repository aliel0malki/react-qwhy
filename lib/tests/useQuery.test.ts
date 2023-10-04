import { describe, afterEach,expect, test } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "../../src/App.tsx";


afterEach(cleanup);

describe("react-qwhy hooks =>", () => {
  test("Status of Environment", () => {
    expect(typeof window).not.toBe("undefined");
  });
  test("useQuery should fetch data and pass it to `return`", () => {
    const dom = render(App);
    const dataElementContainer = don.container.querySelector("#cont");
    expect(dataElementContainer).toBeDefined();
  });
});
