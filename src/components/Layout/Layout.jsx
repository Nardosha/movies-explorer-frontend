import { Outlet } from "react-router-dom";

export const Layout = ({
  isLogged,
}) => {
  return (
    <main className="layout">


      {isLogged && <Outlet />}

    </main>
  );
};
