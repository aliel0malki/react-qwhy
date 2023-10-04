import { describe, afterEach ,test, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "../../src/App";
import * as useQuery from "../../dist/index";

afterEach(cleanup)

describe("test useQuery hook =>", () => {
  test("Status of Environment", () => {
    expect(typeof window).not.toBe("undefined");
  });

  test("Mock useQuery and Render the Data", () => {
    // Mock the useQuery hook with data
    const mockData = [
      {
        userId: 1,
        id: 1,
        title: "test todo",
        completed: false,
      },
    ];

    const useQuerySpy = vi.spyOn(useQuery, "useQuery").mockReturnValue({
      error: null,
      status: 200,
      isLoading: false,
      data: mockData,
    });

    // Render the component
    render(<App />);

    const dataContanier = screen.getByTestId("data-cont");
    expect(dataContanier.children.length).toBe(mockData.length);

    // Check if the loading state is not present
    const loadingElement = screen.queryByText("loading...");
    expect(loadingElement).toBeNull();

    // Check if the todo item is rendered
    const todoElement = screen.getByText("test todo");
    expect(todoElement).toBeInTheDocument();
  });
});
