import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar } from "../../Layout/NavBar/NavBar";
import PublicRoute from "./PublicRouter";
import LoadingBackdrop from "../../components/shared/LoadingBackdrop";
import PrivateRoute from "./PrivateRouter";
//import SessionExpiredDialog from "../../components/Login/SessionExpired/ModalSessionExpired";

const Home = lazy(() => import("../../containers/Home/Home"));
const Login = lazy(() => import("../../containers/Login/Login"));
//const Parametria = lazy(() => import("../../containers/Parametria/Parametria"));

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute element={<Login />} />,
    },
    {
      path: "/home",
      element: (
        <PrivateRoute
          element={
            <NavBar>
              <Home />
            </NavBar>
          }
        />
      ),
    },

    /*{
      path: "/parametria",
      element: (
        <PublicRoute
          element={
            <NavBar>
              <SessionExpiredDialog />
              <Parametria />
            </NavBar>
          }
          editEnabled={true}
        />
      ),
    },*/
  ]);

  return (
    <Suspense fallback={<LoadingBackdrop />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
