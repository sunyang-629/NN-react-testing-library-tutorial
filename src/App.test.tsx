//** use test/it/expect from vitest instead of jest */
//** otherwise the custom matcher from jest-dom will not be recognised */
import { test, expect } from "vitest";
import { render, screen } from "../test-utils";
import App from "./App";

test("renders learn react", () => {
  render(<App />);
  expect(screen.getByTestId("App")).toBeInTheDocument();
});
