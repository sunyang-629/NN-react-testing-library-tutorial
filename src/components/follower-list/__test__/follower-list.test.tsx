import { it, expect } from "vitest";
import { render, screen } from "../../../../test-utils";
import FollowersList from "../follower-list";
import { BrowserRouter } from "react-router-dom";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  it("should render follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render multiple follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElement.length).toBe(5);
  });
});
