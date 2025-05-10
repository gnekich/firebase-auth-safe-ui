import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "@/routes/RootPage";
import AboutPage from "@/routes/AboutPage";

import ErrorPage from "@/routes/ErrorPage";
import ErrorDemoPage from "@/routes/ErrorDemoPage";
import NotFoundPage from "@/routes/NotFoundPage";
import LoadingSuspenseComponent from "@/components/Suspense/LoadingSuspenseComponentSimple";

console.log(`BASE_URL: ${import.meta.env.BASE_URL}`);

const router = createBrowserRouter([
  {
    path: `${import.meta.env.BASE_URL}/`,
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${import.meta.env.BASE_URL}about`,
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },

  // Action
  {
    path: `${import.meta.env.BASE_URL}:firebaseProjectId/action/`,
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },

  // Debug
  {
    path: `${import.meta.env.BASE_URL}debug/404`,
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${import.meta.env.BASE_URL}debug/loading`,
    element: <LoadingSuspenseComponent />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${import.meta.env.BASE_URL}debug/error`,
    element: <ErrorDemoPage />,
    errorElement: <ErrorPage />,
  },

  // Catch all
  {
    path: `${import.meta.env.BASE_URL}*`,
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
]);

function BrowserRouter() {
  return (
    <RouterProvider
      // fallbackElement={NotFoundPage}
      router={router}
    />
  );
}

export default BrowserRouter;
