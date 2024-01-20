import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import App from "../App";
import Login from "../Page/Login";
import NotFound from "../Page/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/notFound",
    element: <NotFound />,
  },
]);

export default routes;
