import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Comments from "../components/Comments";
import Posts from "../components/Posts";
import Login from "../components/Login";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/learning",
        element: <Timeline />,
      },
    ],
  },
]);

export default MainRoutes;
