import { RouteObject } from "react-router";
import {RoutePath, AppRoutes} from "@shared/config";
import { DetailPage, MainPage } from "@pages";

export const routesConfig: RouteObject[] = [
  {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  {
    path: RoutePath[AppRoutes.DETAIL],
    element: <DetailPage />,
  },
];
