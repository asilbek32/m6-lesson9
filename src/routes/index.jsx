import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./private-router";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Login from "../pages/auth/login";
import UserPage from "../pages/user-page";
import MainLAaout from "../componenets/main-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/user",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLAaout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "*",
    element: <h1>sdgsfg</h1>,
  },
]);

export  {router}