import { RouteObject } from "react-router";
import { RoutePath, AppRoutes } from "@shared/config";
import { DetailPage, MainPage } from "@pages";
import { BaseLayout } from "@widgets";

export const routesConfig: RouteObject[] = [
  {
    path: RoutePath[AppRoutes.MAIN],
    element: <BaseLayout/>,
    children: [
      {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage/>,
      },
      {
        path: RoutePath[AppRoutes.DETAIL],
        element: <DetailPage/>,
      }
    ]
  }
];
