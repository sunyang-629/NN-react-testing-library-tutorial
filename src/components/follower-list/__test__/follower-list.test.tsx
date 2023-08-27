import { it, expect, vi } from "vitest";
import { render, screen } from "../../../../test-utils";
import FollowersList from "../follower-list";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

vi.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
//** if there is a file named axios in the __mocks__ folder on the root */
//** axios will be seemd as what it returned from */

const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Laith",
          last: "Harb",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/82.jpg",
        },
        login: {
          username: "ThePhonyGoat",
        },
      },
      {
        name: {
          first: "Laith",
          last: "Harb",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/82.jpg",
        },
        login: {
          username: "ThePhonyGoat",
        },
      },
    ],
  },
};

describe("FollowersList", () => {
  it("should render follower items", async () => {
    mockedAxios.get.mockResolvedValue(mockResponse);
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render multiple follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findAllByTestId(/follower-item/i);
    screen.debug();
    expect(followerDivElement.length).toBe(2);
  });
});
