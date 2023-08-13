import { NavLink, useLocation } from "react-router-dom";

const NavBar = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="h-[83px] w-full flex fixed bottom-0 left-0 p-4 border-t-[1px] border-mid-blue">
        <ul className="flex w-full gap-[72px] justify-center mx-8">
          <li>
            <NavLink to="/areaSelector">
              {pathname === "/areaSelector" ? (
                <>
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src="./discActive.svg"
                      alt="disc icon"
                      width={24}
                      height={24}
                    />
                    <img src="./elipse.svg" alt="elipse" width={3} height={3} />
                  </div>
                </>
              ) : (
                <img src="./disc.svg" alt="disc icon" width={24} height={24} />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/weatherCity">
              {pathname === "/weatherCity" ? (
                <>
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src="./cloudActive.svg"
                      alt="disc icon"
                      width={24}
                      height={24}
                    />
                    <img src="./elipse.svg" alt="elipse" width={3} height={3} />
                  </div>
                </>
              ) : (
                <img src="./cloud.svg" alt="disc icon" width={24} height={24} />
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
