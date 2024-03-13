import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Comments from "../components/Comments";
import Posts from "../components/Posts";

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
    ],
  },
]);

export default MainRoutes;
