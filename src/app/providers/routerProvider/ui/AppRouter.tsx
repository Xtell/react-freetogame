import { RouterProvider } from "react-router-dom";
import { router } from "../lib/router";

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
