import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import WeatherCityPage from "@/pages/WeatherCityPage/WeatherCityPage";
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
      { path: "/weatherCity", element: <WeatherCityPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
