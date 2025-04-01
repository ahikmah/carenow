import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { LoadingScreen } from "src/components/loading-screen";

// ----------------------------------------------------------------------
const NotFoundPage = lazy(() => import("src/pages/error/404"));
// ----------------------------------------------------------------------

export const errorRoutes = [
  {
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: "404",
        element: <NotFoundPage />,
      },
    ],
  },
];
