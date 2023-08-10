import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import AreaSelectorPage from "@/pages/AreaSelectorPage/AreaSelectorPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/areaSelector" replace />,
      },
      { path: "/areaSelector", element: <AreaSelectorPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
