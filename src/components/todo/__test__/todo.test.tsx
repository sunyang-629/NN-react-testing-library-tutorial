import { it, expect } from "vitest";
import { render, screen, fireEvent } from "../../../../test-utils";
import Todo from "../todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTasks = (tasks: string[]) => {
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: "Add" });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe("Toto", () => {
  it("should render Toto component", async () => {
    render(<MockTodo />);
    const TodoComponent = screen.getByTestId("todo");
    expect(TodoComponent).toBeInTheDocument();
  });

  it("should render todo in the list", async () => {
    render(<MockTodo />);
    addTasks(["Go Grocery Shopping"]);
    const divElement = screen.getByText(/go grocery shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple items", async () => {
    render(<MockTodo />);
    addTasks(["Go Grocery Shopping", "Pet My Cat", "Wash My Hands"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  it("task should not have completed class when initially rendered", async () => {
    render(<MockTodo />);
    addTasks(["Go Grocery Shopping"]);
    const divElement = screen.getByTestId("task-container");
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should have completed class when initially rendered", async () => {
    render(<MockTodo />);
    addTasks(["Go Grocery Shopping"]);
    const divElement = screen.getByTestId("task-container");
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
