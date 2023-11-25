import logo from "../../images/icons/logo__COLOR_main-1-min.svg";

export const Logo = ({className}) => {
  return <img className={`logo ${className}`} src={logo} alt="Логотип" />;
};
