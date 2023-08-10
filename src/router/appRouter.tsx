import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "/areaSelector", element: <App /> }],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
