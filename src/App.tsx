import { RouterProvider } from "react-router-dom";
import "./App.css";
import Banner from "./components/banner";
import router from "./routes/routes";
// import { Switch, Route } from "react-router-dom"
// import TodoPage from './pages/TodoPage/TodoPage';
// import FollowersPage from './pages/FollowersPage/FollowersPage';

function App() {
  return (
    <div className="App" data-testid="App">
      <Banner />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
