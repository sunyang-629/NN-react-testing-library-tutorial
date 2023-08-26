import { test, expect } from "vitest";
import { render, screen } from "../../../../test-utils";
import Header from "../header";

test("should render same text passed into title prop", async () => {
  render(<Header title="Header" />);
  const headingElement = screen.getByText(/header/i);
  expect(headingElement).toBeInTheDocument();
});

test("should render same text passed into title prop", async () => {
  render(<Header title="Header" />);
  //** getByRole always error because there are 2 headings */
  //** use name in options to look for one we want to test with */
  const headingElement = screen.getByRole("heading", { name: "Header" });
  expect(headingElement).toBeInTheDocument();
});

test("should render same text passed into title prop", async () => {
  render(<Header title="Header" />);
  //** title attribute in the element */
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

//Find by
test("should render same text passed into title prop", async () => {
  render(<Header title="Header" />);
  const headingElement = await screen.findByText(/header/i);
  expect(headingElement).toBeInTheDocument();
});

//Query by
test("should render same text passed into title prop", async () => {
  render(<Header title="Header" />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});

test("should render same text passed into title prop", async () => {
  render(<Header title="Header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});
