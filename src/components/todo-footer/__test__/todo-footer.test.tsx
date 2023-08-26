import React from "react";
import { it, expect } from "vitest";
import { render, screen } from "../../../../test-utils";
import TodoFooter from "../todo-footer";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter: React.FC<{ numberOfIncompleteTasks: number }> = ({
  numberOfIncompleteTasks,
}) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

it("should render the correct amount of incompleted tasks", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText("5 tasks left");
  expect(paragraphElement).toBeInTheDocument();
});

it("should render 'task' when the number of incomplete tasks is one ", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.queryByText("1 tasks left");
  expect(paragraphElement).not.toBeInTheDocument();
});

it("should render 'task' when the number of incomplete tasks is one ", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText("1 task left");
  expect(paragraphElement).toBeTruthy();
});

it("should visible 'task' when the number of incomplete tasks is one ", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.queryByText("1 task left");
  expect(paragraphElement).toBeVisible();
});

it("should visible 'task' when the number of incomplete tasks is one ", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.queryByText("1 task left");
  expect(paragraphElement).toContainHTML("p");
});

it("should visible 'task' when the number of incomplete tasks is one ", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("para");
  expect(paragraphElement.textContent).toBe("1 task left");
});
