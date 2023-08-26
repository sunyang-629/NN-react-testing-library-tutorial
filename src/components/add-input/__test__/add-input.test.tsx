import { test, expect, describe, vi } from "vitest";
import { render, screen, fireEvent } from "../../../../test-utils";
import AddInput from "../add-input";

const mockedSetTodo = vi.fn();

describe("AddInput", () => {
  test("should render input element", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type in input", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(
      /add a new task here.../i
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  test("should have empty input when add button is clicked", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(
      /add a new task here.../i
    ) as HTMLInputElement;
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
