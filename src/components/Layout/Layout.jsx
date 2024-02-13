import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({
  isLogged,
  isShowFooter,
  isMenuOpen,
  onMenuToggle,
}) => {
  return (
    <>
      <Header
        isLogged={isLogged}
        isMenuOpen={isMenuOpen}
        onMenuToggle={onMenuToggle}
      />

      <Outlet />

      {isShowFooter && <Footer />}
    </>
  );
};
