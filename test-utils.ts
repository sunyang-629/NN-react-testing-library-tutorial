import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

// const customRender = (
//   ui: ReactElement,
//   options?: Omit<RenderOptions, "wrapper">
// ) => render(ui, { ...options });

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });

export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };
