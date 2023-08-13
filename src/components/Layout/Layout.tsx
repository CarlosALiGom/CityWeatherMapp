import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
};

export default Layout;
