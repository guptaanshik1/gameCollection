import { createBrowserRouter } from "react-router-dom";
import { GameDetailsPage } from "../pages/GameDetailsPage";
import Layout from "../pages/Layout/Layout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;
