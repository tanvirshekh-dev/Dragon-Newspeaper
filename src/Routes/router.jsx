import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
      path: "/",
      Component: Home,
      },
      {
      path: "/category/:id",
        Component: CategoryNews,
      loader: () => fetch("/news.json")
      },
    ],
    },
    {
    path: "/auth",
    element: <h2>auth layout</h2>,
    },
    {
    path: "/news",
    element: <h2>news layout</h2>,
    },
    {
    path: "/*",
    element: <h2>error</h2>,
  },
]);


export default router;