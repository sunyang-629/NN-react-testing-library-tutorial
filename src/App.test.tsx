// import { screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { render, screen } from "../test-utils";
import App from "./App";

test("renders learn react", () => {
  render(<App />);
  //   const element = screen.getByTestId("App");
  expect(screen.getByTestId("App")).toBeInTheDocument();
});
