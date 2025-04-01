import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { MainLayout } from "src/layouts";

import { LoadingScreen } from "src/components/loading-screen";

// ----------------------------------------------------------------------
const PatientVisit = lazy(() => import("../pages/patient-visit"));
const VisitHistory = lazy(() => import("../pages/visit-history"));
// ----------------------------------------------------------------------

const MainContent = (
  <MainLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </MainLayout>
);

export const mainRoutes = [
  {
    path: "/",
    element: MainContent,
    children: [
      {
        element: <PatientVisit />,
        index: true,
      },
      {
        path: "visit-history",
        element: <VisitHistory />,
      },
    ],
  },
];
