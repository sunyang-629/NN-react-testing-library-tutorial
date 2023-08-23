import { createBrowserRouter } from "react-router-dom";
import TodoPage from "../pages/todo-page/todo-page";
import FollowersPage from "../pages/follower-page/follower-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage />,
  },
  {
    path: "/followers",
    element: <FollowersPage />,
  },
]);

export default router;
