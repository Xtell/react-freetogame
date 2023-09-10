export enum AppRoutes {
  MAIN = "main",
  DETAIL = "detail",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.DETAIL]: "/detail",
};
